import { NAVEGACION } from "../../Const/const"
import { useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footerr/Footer"
import Title from "../../Components/Title/Title"
import Button from "../../Components/Button/Button"
import ContainerCardHeroe from "../../Components/Containers/ContainerCardHero/ContainerCardHero"
import ContainerCardMap from "../../Components/Containers/ContainerCardMap/ContainerCardMap"
import useHeroes from "../../Hooks/useHeroes"
import useMaps from "../../Hooks/useMaps"

const Favourites = () => {

    const { favHeroes } = useHeroes()
    const { favMaps } = useMaps()

    const navigate = useNavigate()


    const handleGoToHome = () => {
        navigate(NAVEGACION.home)
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <Title className="text-3xl font-bold text-gray-800 mb-6" title={"Favourites"} />

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Heroes</h2>
                    {favHeroes.length > 0 ? (
                        <ContainerCardHeroe heroes={favHeroes} />
                    ) : (
                        <p className="text-gray-600">No heroes added to favourites yet.</p>
                    )}
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Maps</h2>
                    {favMaps.length > 0 ? (
                        <ContainerCardMap maps={favMaps} />
                    ) : (
                        <p className="text-gray-600">No maps added to favourites yet.</p>
                    )}
                </div>

                <div className="mt-8">
                    <Button
                        className="fixed bottom-6 right-6 z-50 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded shadow-lg"
                        onClick={handleGoToHome}
                        name={"Home"} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Favourites