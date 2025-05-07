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

      // Activar si al menos el 40% es visible y viene desde abajo (scrolling down)
      if (visibleRatio >= 0.4 && scrollingDown && !hasAnimated.current) {
        maskedImage.classList.remove("mask-animation");
        void maskedImage.offsetWidth;  // Forzar reflow
        maskedImage.classList.add("mask-animation");
        hasAnimated.current = true;
      }

      // Solo reiniciar animación si la imagen se ha salido completamente por arriba
      const isAboveViewport = rect.bottom < 0; // Si la imagen está por encima del viewport
      const isBelowViewport = rect.top > window.innerHeight; // Si la imagen está completamente debajo del viewport

      if (isAboveViewport && hasAnimated.current) {
        hasAnimated.current = false;
        maskedImage.classList.remove("mask-animation");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar al montar

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
