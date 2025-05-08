// import { useTranslation } from "react-i18next"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footerr/Footer"
import Title from "../../Components/Title/Title"
import ContainerCardHeroe from "../../Components/Containers/ContainerCardHero/ContainerCardHero"
import ContainerCardMap from "../../Components/Containers/ContainerCardMap/ContainerCardMap"
import useHeroes from "../../Hooks/useHeroes"
import useMaps from "../../Hooks/useMaps"
import usePageTitle from "../../Hooks/usePageTitle"
import { useTranslation } from 'react-i18next'

const Favourites = () => {

  const { t } = useTranslation()

    usePageTitle()

    const { favHeroes } = useHeroes()
    const { favMaps } = useMaps()


    return (
        <div
            className="w-full min-h-screen pt-20"
            style={{
                backgroundImage: `url('https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt912826400bb9b504/6308459c47fdc2115dced822/cloud-2600.jpg?format=webply&quality=90')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Header />
            <div className="container mx-auto px-4 py-8">
            <Title className="text-3xl font-bold text-black-800 mb-6" title={t("favourites")} />

                <div className="mb-8">
                <Title className="text-2xl font-semibold text-black-700 mb-4" title={t("heroes")} />
                {favHeroes.length > 0 ? (
                        <ContainerCardHeroe heroes={favHeroes} />
                    ) : (
              <Title className="text-black-600" title={t("noHeroesFound")} />
                    )}
                </div>

                <div className="mb-8">
                <Title className="text-2xl font-semibold text-black-700 mb-4" title={t("maps")} />
                {favMaps.length > 0 ? (
                        <ContainerCardMap maps={favMaps} />
                    ) : (
                        <Title className="text-black-600" title={t("noMapsFound")} />
                    )}
                </div>

                <div className="mt-8">
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Favourites