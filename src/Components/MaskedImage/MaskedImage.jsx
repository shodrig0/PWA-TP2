import { useEffect, useRef } from "react";

export default function MaskedImage({ url }) {
  const imagenRef = useRef(null);
  const maskedImageRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const imagen = imagenRef.current;
    const maskedImage = maskedImageRef.current;
    if (!imagen || !maskedImage) return;

    const handleScroll = () => {
      const rect = imagen.getBoundingClientRect();
      const imgHeight = rect.height;
      const visibleHeight = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
      const visibleRatio = visibleHeight / imgHeight;

      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;


      if (visibleRatio >= 0.4 && scrollingDown && !hasAnimated.current) {
        maskedImage.classList.remove("mask-animation");
        void maskedImage.offsetWidth; 
        maskedImage.classList.add("mask-animation");
        hasAnimated.current = true;
      }

     
      const isAboveViewport = rect.bottom < 0; 
      const isBelowViewport = rect.top > window.innerHeight; 

      if (isAboveViewport && hasAnimated.current) {
        hasAnimated.current = false;
        maskedImage.classList.remove("mask-animation");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden hidden xl:block">
      <div
        ref={maskedImageRef}
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${url}')`,
          WebkitMaskImage: `url('/masknew-2.png')`,
          WebkitMaskSize: "cover",
          WebkitMaskPosition: "0% 0%",
          maskImage: `url('/masknew-2.png')`,
          maskSize: "cover",
          maskPosition: "0% 0%",
        }}
      />
      <img
        ref={imagenRef}
        className="w-full h-full object-cover block"
        src="/bw-image.png"
        alt="Imagen en blanco y negro"
      />
    </div>
  );
}
