import React from 'react'
import CardMap from './cardMaps/cardMaps'

function ContainerCardMaps() {
    const Maps = [
      {
        name: "Hanamura",
        screenshot: "https://overfast-api.tekrop.fr/static/maps/hanamura.jpg",
        gamemodes: ["assault"],
        location: "Tokyo, Japan",
        country_code: "JP"
      },
      {
        name: "Horizon Lunar Colony",
        screenshot: "https://overfast-api.tekrop.fr/static/maps/horizon.jpg",
        gamemodes: ["assault"],
        location: "Earth's moon",
        country_code: null
      },
      {
        name: "Paris",
        screenshot: "https://overfast-api.tekrop.fr/static/maps/paris.jpg",
        gamemodes: ["assault"],
        location: "Paris, France",
        country_code: "FR"
      },
      {
        name: "Temple of Anubis",
        screenshot: "https://overfast-api.tekrop.fr/static/maps/anubis.jpg",
        gamemodes: ["assault"],
        location: "Giza Plateau, Egypt",
        country_code: "EG"
      },
      {
        name: "Volskaya Industries",
        screenshot: "https://overfast-api.tekrop.fr/static/maps/volskaya.jpg",
        gamemodes: ["assault"],
        location: "St. Petersburg, Russia",
        country_code: "RU"
      }
    ];
  
    return (
      <div className="px-4 bg-black">
        {Maps.map((mapa) => (
          <CardMap
            key={mapa.name}
            name={mapa.name}
            screenshot={mapa.screenshot}
            gamemodes={mapa.gamemodes}
          />
        ))}
      </div>
    );
  }
  

export default ContainerCardMaps
