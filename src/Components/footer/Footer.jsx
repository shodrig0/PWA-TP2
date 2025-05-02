import React from 'react';
import { Youtube, Facebook, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black-20 w-full text-gray-300 py-5 my-10 flex flex-col items-center gap-y-3 text-sm">
        <hr />
      <div className="flex gap-x-4">
        <a href="#" target="_blank" rel="noopener noreferrer">
            <Youtube className="h-10 w-10 opacity-70 hover:opacity-100"/>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-10 w-10 opacity-70 hover:opacity-100"/>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-10 w-10 opacity-70 hover:opacity-100"/>
        </a>
      </div>
      <div className="flex flex-col items-center gap-y-1">
      <img 
  src="blizzardLogo.svg" 
  alt="Blizzard Logo" 
  className="h-30 transition duration-300 hover:brightness-155"
/>
        <p className="text-center text-xl">
          &trade; &amp; &copy; 2025 Blizart Entertainment, Inc. Todos los derechos reservados. Blizzart, Overtwatch son marcas comerciales o marcas registradas de Blizzart Entertainment, Inc.
        </p>
      </div>
      <nav className="flex gap-x-6">
        <a href="#" className="hover:underline">AVISO DE PRIVACIDAD</a>
        <a href="#" className="hover:underline">TÉRMINOS DE USO</a>
        <a href="#" className="hover:underline">POLÍTICA DE COOKIES</a>
        <a href="#" className="hover:underline">INFORMACIÓN DE LA EMPRESA</a>
        <a href="#" className="hover:underline">PREFERENCIAS DE COOKIES</a>
      </nav>
      <div className="flex gap-x-3">
        <img src="https://blz-contentstack-images.akamaized.net/v3/assets/blt72f16e066f85e164/bltda241a8277f6f927/612d1a5d19b5613c6defce41/esrb.webp" alt="Clasificación de edad 12 Europa" className="h-15" />
        <img src="https://images.blz-contentstack.com/v3/assets/blt3d2b37a4c9c0ce28/blteda65bf57e501050/5cf6e294cf7aa6330ac66a99/t.424Bl.png" alt="Clasificación de edad 12 Alemania" className="h-15" />
      </div>
    </footer>
  );
}

export default Footer;