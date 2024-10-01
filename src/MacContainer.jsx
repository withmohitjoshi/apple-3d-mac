import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MacContainer = () => {
  let model = useGLTF("./mac.glb");
  let tex = useTexture("./red.jpg");
  let meshes = {};
  model.scene.traverse((child) => {
    if (child instanceof THREE.Mesh || child instanceof THREE.Group) {
      meshes[child.name] = child;
    }
  });

  meshes.back.rotation.x = THREE.MathUtils.degToRad(90);
  meshes.matte.rotation.x = THREE.MathUtils.degToRad(90);
  meshes.matte.material.emissiveIntensity = 0;
  meshes.matte.material.matalness = 0;
  meshes.matte.material.roughness = 1;
  meshes.matte.material.map = tex;
  let data = useScroll();
  useFrame(() => {
    meshes.back.rotation.x = THREE.MathUtils.degToRad(90 - data.offset * 90);
    meshes.matte.rotation.x = THREE.MathUtils.degToRad(90 - data.offset * 90);
  });
  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;
