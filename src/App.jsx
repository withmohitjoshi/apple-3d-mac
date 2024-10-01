import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MacContainer from "./MacContainer";
const App = () => {
  return (
    <div className="w-full h-full font-[Helvetica_Now_Display]">
      <div className="line absolute top-0 left-1/2 -translate-x-1/2 flex gap-10 pt-10 pb-3">
        {[
          "Store",
          "Mac",
          "iPad",
          "iPhone",
          "Watch",
          "Vision",
          "AirPods",
          "Support",
        ].map((e) => (
          <a
            href="#"
            key={e}
            className="text-white font-[400] text-sm capitalize"
          >
            {e}
          </a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-56 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h3 className="text-7xl tracking-tighter font-[700] masked mb-4">
          macbook pro.
        </h3>
        <h3>Oh so pro !</h3>
        <p className="text-center w-3/4">
          You can answer calls or messages from your iPhone directly on your
          Mac. Copy images, video, or text on your iPhone, then paste into
          another app on your nearby Mac. With iCloud, you can access your
          favorite files from either your iPhone or your Mac. And so much more.
        </p>
      </div>
      <Canvas
        camera={{
          fov: 12,
          position: [0, -10, 220],
        }}
      >
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr",
          ]}
        />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
