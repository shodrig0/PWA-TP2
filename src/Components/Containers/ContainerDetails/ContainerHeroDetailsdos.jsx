import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { imgHeroeBanner } from "/public/js/heroeImg";
import { iconRol } from "../../../../public/js/logoRol";
import { Pause, Play } from "lucide-react";
import MaskedImage from "../../MaskedImage/MaskedImage";

const ContainerHeroDetailsdos = () => {
  const { heroId } = useParams();
  const [hero, setHero] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const bgImage = imgHeroeBanner[heroId];

  useEffect(() => {
    const heroDetails = async () => {
      try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/heroes/${heroId}`);
        if (!resp.ok) throw new Error("No hero");

        const data = await resp.json();
        setHero(data);
        setActiveIndex(null); // Sin habilidad activa al inicio
        setIsPlaying(false);
      } catch (error) {
        console.log("Error, no data", error);
      }
    };

    heroDetails();
  }, [heroId]);

  useEffect(() => {
    if (videoRef.current) {
      if (activeIndex !== null) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [activeIndex]);

  if (!hero) return <p className="text-white text-center py-8">Cargando...</p>;

  const backgroundAbility = hero.abilities[0];
  const active = activeIndex !== null ? hero.abilities[activeIndex] : null;
  const currentVideo = active ?? backgroundAbility;
  const logoRole = iconRol[hero.role] ?? "/default-icon.png";

  return (
    <div className="w-full h-full">
      {/* Banner superior con imagen de fondo */}
      <div
        className="h-screen bg-cover bg-center w-full relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <section
          aria-labelledby="hero-info"
          className="absolute bg-black/70 backdrop-blur-md left-10 top-1/2 -translate-y-1/2 text-white px-8 py-6 max-w-4xl mx-auto rounded-2xl shadow-lg"
        >
          <div>
            <h2 id="hero-info" className="text-3xl font-bold">{hero.name}</h2>
            <img src={logoRole} alt={hero.role} className="w-10 h-10 mt-2" />
            <p className="text-sm text-gray-400 mt-1 capitalize">{hero.role}</p>
          </div>
          <div className="mt-4 space-y-4">
            <p className="text-lg italic text-gray-300">{hero.description}</p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 text-sm">
              <div>
                <dt className="font-semibold text-gray-200">Location</dt>
                <dd className="text-gray-400">{hero.location}</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-200">Age</dt>
                <dd className="text-gray-400">{hero.age}</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-200">Birthday</dt>
                <dd className="text-gray-400">{hero.birthday}</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>

      {/* Sección de habilidades con video */}
      <div className="relative w-full h-[600px] text-white overflow-hidden bg-black">
        <video
          ref={videoRef}
          key={currentVideo.video.link.mp4}
          src={currentVideo.video.link.mp4}
          poster={currentVideo.video.thumbnail}
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay={active !== null}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
          <div className="h-[250px]">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary">
              {active?.name ?? backgroundAbility.name}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              {active?.description ?? backgroundAbility.description}
            </p>
          </div>

          {/* Botones de habilidades */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {hero.abilities.map((ability, index) => (
              <button
                key={ability.name}
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col items-center transition-transform duration-200 ${
                  index === activeIndex ? "scale-110 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full border-2 bg-white/10 backdrop-blur-sm ${
                    index === activeIndex ? "border-white" : "border-gray-500"
                  }`}
                >
                  <img
                    src={ability.icon}
                    alt={ability.name}
                    className="w-8 h-8 object-contain filter brightness-0 invert"
                  />
                </div>
                <span className="text-sm font-medium mt-1 text-center">{ability.name}</span>
              </button>
            ))}
          </div>

          {/* Botón de pausa/reproducir */}
          <button
            onClick={() => {
              if (videoRef.current) {
                if (isPlaying) {
                  videoRef.current.pause();
                  setIsPlaying(false);
                } else {
                  videoRef.current.play();
                  setIsPlaying(true);
                }
              }
            }}
            className="h-16 w-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition duration-200"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Historia del héroe */}
      <div className="px-6 max-w-4xl mx-auto text-white mt-10 mb-16">
        <h3 className="text-2xl font-bold mb-4">Story</h3>
        <p className="text-sm text-gray-300 italic mb-4">{hero.story.summary}</p>
        {hero.story.chapters.map((chapter, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-lg font-semibold">{chapter.title}</h4>
            <p className="text-sm text-gray-300 mt-1">{chapter.content}</p>
            {chapter.picture && (
  <div className="relative w-[950px] h-[566px] mx-auto">
    {/* Imagen de fondo (color) */}
    <img
      src={chapter.picture}
      alt={chapter.title}
      className="absolute inset-0 w-full h-full object-cover rounded-lg"
    />

    {/* Componente con máscara encima */}
    <div className="absolute inset-0 z-10">
      <MaskedImage url={chapter.picture} />
    </div>
  </div>
)}

          </div>
        ))}
        {hero.story.media?.link && (
          <a
            href={hero.story.media.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-blue-400 underline"
          >
            More info
          </a>
        )}
      </div>
    </div>
  );
};

export default ContainerHeroDetailsdos;
