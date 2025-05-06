// components/BannerHome.jsx
import { useEffect, useRef } from "react";
import Parallax from "parallax-js"; // ← Usamos la librería directamente

const BannerHome = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (sceneRef.current) {
      const parallaxInstance = new Parallax(sceneRef.current, {
        relativeInput: true,
        hoverOnly: true,
      });

      return () => {
        parallaxInstance.disable(); // Limpieza cuando se desmonta
      };
    }
  }, []);

  return (
    <div
      className="w-full h-full xl:h-screen overflow-hidden grid md:place-items-center"
     
    >
        <div className="absolute inset-0 flex justify-center  md:mt-60 mx:mt-100 items-center z-30 pointer-events-none">
    <img
      src="/overwatch-logo.png"
      alt="Overwatch logo"
      className="w-40 md:w-60 xl:w-96"
    />
  </div>
  <div className="relative w-full h-full list-none m-0 p-0 xl:hidden">
  <img
    src="https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt10ca78298ef6edf0/660c5d270b9c8248765adc18/Desktop_Outro_Characters.png"
    alt=""
    className="w-full h-full object-contain"
  />
</div>
      <ul
        ref={sceneRef}
        className="relative w-full h-full list-none m-0 p-0 hidden xl:block"
        id="scene"
        style={{ position: "relative" }}
      >
        <li
          data-depth="0.5"
          className="layer absolute m-0 p-0 w-full h-full"
          data-invert-x
          data-invert-y
        >
          <img
            src="https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt24bd0c583f02e676/660c5e6339a9b3a823f86c6c/Lucio.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </li>
        <li data-depth="0.4" className="layer absolute w-full h-full" >
          <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt50b24d1663ede72d/660c5ea2940fef074481def0/Edited_Mercy.png" alt="" />
          </li>

        <li
          data-depth="0.3"
          className="layer"
          style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }}
        >
          <img
            src="https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt0e09c46a0eba2025/660c5f0e194871210a5d1ce1/Mei_Without_Ice_Blast.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </li>

        <li
          data-depth="0.2"
          className="layer"
          style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }}
        >
          <img
            src="https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltdf9dece108257e84/660c5ed039a9b3cb99f86c70/Reinhardt.png"
            alt=""
            className="w-full h-full object-contain "
          />
        </li>

        <li data-depth="0.2" className="layer absolute w-full h-full" >
          <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltf38ff705499bfd25/660c5f692c8f66429a8483e2/Tracer.png" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default BannerHome;


