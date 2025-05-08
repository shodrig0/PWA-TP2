import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next";

const HeroDetails = () => {

    const { heroId } = useParams()
    const [hero, setHero] = useState(null)
    const [openVideoIndex, setOpenVideoIndex] = useState(null)
    const [error, setError] = useState(null)
    const {t,  i18n } = useTranslation();
console.log(i18n)
    useEffect(() => {
        const heroDetails = async () => {
            try {
                const resp = await fetch(`${import.meta.env.VITE_API_URL}/heroes/${heroId}${i18n.language == "es" ? "?locale=es-es" : "?locale=en-us"}`)

                if (!resp.ok) {
                    throw new Error('No hero')
                }

                const data = await resp.json()
                setHero(data)
                setError(null)
            } catch (error) {
                console.log('Error, no data', error)
                setError('Unprocessable Content. Check the name!')
            }
        }
        heroDetails()
    }, [heroId,i18n.language])

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-white">
                <h1 className="text-4xl font-bold">Error</h1>
                <p className="mt-4 text-lg">{error}</p>
            </div>
        )
    }

    if (!hero) {
        return (
            <div className="flex justify-center items-center min-h-screen">
            </div>
        )
    }

    return (
        <section className="p-6 max-w-6xl mx-auto text-white">
            <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-800 p-4 flex flex-col items-center">
                    <img src={hero.portrait} alt={hero.name} className="rounded-lg mb-4 w-full h-auto object-contain" />
                    <h2 className="text-3xl font-bold">{hero.name}</h2>
                    <p className="text-sm text-gray-400 mt-1 capitalize">{hero.role}</p>
                </div>

                <div className="md:w-2/3 p-6 space-y-4">
                    <p className="text-lg italic text-gray-300">{hero.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <p><strong>Location:</strong> {hero.location}</p>
                        <p><strong>Age:</strong> {hero.age}</p>
                        <p><strong>Birthday:</strong> {hero.birthday}</p>
                        <p><strong>Total HP:</strong> {hero.hitpoints.total} (Health: {hero.hitpoints.health}, Armor: {hero.hitpoints.armor}, Shields: {hero.hitpoints.shields})</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mt-6">Abilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            {hero.abilities.map((ability, index) => (
                                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                                    <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10">
  <img
    src={ability.icon}
    alt={ability.name}
    className="w-full h-full object-contain"
  />
</div>
                                        <h4 className="font-bold">{ability.name}</h4>
                                    </div>
                                    <p className="text-sm text-gray-300">{ability.description}</p>
                                    {ability.video?.link && (
                                        <div className="mt-2">
                                            {openVideoIndex === index ? (
                                                <video
                                                    controls
                                                    autoPlay
                                                    className="rounded-lg w-full max-h-64 object-cover"
                                                >
                                                    <source src={ability.video.link.mp4} type="video/mp4" />
                                                    Your browser doesn't support the video tag!
                                                </video>
                                            ) : (
                                                <img
                                                    src={ability.video.thumbnail}
                                                    alt={`${ability.name} thumbnail`}
                                                    onClick={() => setOpenVideoIndex(index)}
                                                    className="cursor-pointer rounded-lg hover:opacity-80 transition"
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mt-6">Story</h3>
                        <p className="text-sm text-gray-300 italic mb-2">{hero.story.summary}</p>
                        {hero.story.chapters.map((chapter, index) => (
                            <div key={index} className="mt-4">
                                <h4 className="font-semibold">{chapter.title}</h4>
                                <p className="text-sm text-gray-300">{chapter.content}</p>
                                {chapter.picture && <img src={chapter.picture} alt={chapter.title} className="mt-2 rounded-lg" />}
                            </div>
                        ))}
                        {hero.story.media?.link && (
                            <a href={hero.story.media.link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-blue-400 underline">
                                More info
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroDetails