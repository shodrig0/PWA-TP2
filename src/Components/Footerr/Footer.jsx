import React from 'react';
import { Youtube, Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation();


  return (

    <footer className="font-titillium-web bg-gray-800 w-full text-gray-300 py-8 px-4 text-sm" s style={{ backgroundColor: '#001922' }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-y-6">


        <div className="flex gap-6">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Youtube className="h-8 w-8 opacity-70 hover:opacity-100" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-8 w-8 opacity-70 hover:opacity-100" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-8 w-8 opacity-70 hover:opacity-100" />
          </a>
        </div>


        <div className="flex flex-col items-center text-center gap-2 px-2">
          <img
            src="/blizzardLogo.svg"
            alt="Blizzard Logo"
            className="h-14 object-contain"
          />
          <p className="text-xs md:text-sm leading-snug max-w-md">
            &trade; &amp; &copy; 2025 Blizzard Entertainment, Inc. {t('footer.rights')}
          </p>
        </div>
        <div>
        Gracias a Overfast API por su valioso aporte de datos.
        </div>


        <nav className="flex flex-wrap justify-center gap-4 text-center text-xs md:text-sm">
  <a href="https://overfast-api.tekrop.fr/docs#/" target="_blank" rel="noreferrer" className="hover:underline">
    {t('footer.api')}
  </a>
  <a href="https://github.com/shodrig0/PWA-TP2" target="_blank" rel="noreferrer" className="hover:underline">
    {t('footer.repository')}
  </a>
  <a href="#" target="_blank" rel="noreferrer" className="hover:underline">
    {t('footer.about')}
  </a>
  <a href="#" target="_blank" rel="noreferrer" className="hover:underline">
    {t('footer.overwatch')}
  </a>
</nav>


        <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
          <img
            src="https://blz-contentstack-images.akamaized.net/v3/assets/blt72f16e066f85e164/bltda241a8277f6f927/612d1a5d19b5613c6defce41/esrb.webp"
            alt="Clasificación de edad 12 Europa"
            className="h-10 object-contain"
          />
          <img
            src="https://images.blz-contentstack.com/v3/assets/blt3d2b37a4c9c0ce28/blteda65bf57e501050/5cf6e294cf7aa6330ac66a99/t.424Bl.png"
            alt="Clasificación de edad 12 Alemania"
            className="h-10 object-contain"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
