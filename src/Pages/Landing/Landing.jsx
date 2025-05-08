import { Boxes, Search, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NAVEGACION } from '../../Const/const';
import { Globe } from 'lucide-react';
import React from 'react'
import usePageTitle from '../../Hooks/usePageTitle';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  const { t, i18n } = useTranslation();
  usePageTitle()

  const navigate = useNavigate()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const goToHome = () => {
    navigate(NAVEGACION.home)
  }

  return (
    <div className="relative h-screen w-full flex justify-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/dxwx1kc4l/video/upload/v1746118766/wbjn4iubkql7apzsjrxg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
        <button
  className="absolute right-10 top-10 w-fit max-w-xs mx-2 flex items-center text-white font-primary text-xl md:text-sm lg:text-base cursor-pointer 
             rounded-md transition-all duration-300 p-3
             hover:backdrop-blur-sm hover:bg-white/10 hover:rounded-xl"
  onClick={toggleLanguage}
>
        <Globe className="w-5 h-5 mr-2" />
        {i18n.language.toUpperCase()}
      </button>

      <div className="relative z-20 max-w-6xl px-6 flex flex-col md:flex-row items-center justify-around gap-10 text-white text-left">
        <div className="block md:hidden justify-center w-full">
          <img
            src="/overwatch-logo.png"
            alt="Overwatch Logo"
            className="w-40 object-contain m-auto mt-10"
          />
        </div>

        <div className="w-full h-full font-titillium-web md:h-screen md:flex md:items-center md:justify-center">
          <div className="w-full max-w-xl flex flex-col items-start">
            <h1 className="font-primary md:text-center text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
              {t("landing.title")}
            </h1>
            <p className="text-base md:text-lg max-w-xl mb-4 leading-normal">
              {t("landing.intro1")} <strong>{t("landing.introHeroes")}</strong>, {t("landing.intro2")} <strong>{t("landing.introMaps")}</strong> {t("landing.intro3")} <strong>{t("landing.introStrategy")}</strong>!
            </p>

            <ul className="text-base md:text-lg space-y-4 mb-6">
              <li className="flex items-center">
                <Boxes className="w-8 h-8 text-yellow-400 mr-3" />
                {t("landing.feature1")}
              </li>
              <li className="flex items-center">
                <Star className="w-8 h-8 text-yellow-400 mr-3" />
                {t("landing.feature2")}
              </li>
              <li className="flex items-center">
                <Search className="w-8 h-8 text-yellow-400 mr-3" />
                {t("landing.feature3")}
              </li>
            </ul>

            <div className="w-full flex sm:justify-center xl:justify-start">
              <button
                onClick={goToHome}
                className="font-primary w-full md:w-full xl:w-[200px] bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded"
              >
                {t("landing.homeButton")}
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 justify-end">
          <img
            src="/overwatch-logo.png"
            alt="Overwatch Logo"
            className="w-60 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;

