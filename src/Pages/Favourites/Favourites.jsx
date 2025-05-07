import { NAVEGACION } from "../../Const/const"
import { useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footerr/Footer"
import Button from "../../Components/Button/Button"
import ContainerCardHeroe from "../../Components/Containers/ContainerCardHero/ContainerCardHero"
import useHeroes from "../../Hooks/useHeroes"

const Favourites = () => {

    const { favHeroes } = useHeroes()


    const navigate = useNavigate()


    const handleGoToHome = () => {
        navigate(NAVEGACION.home)
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Favourites</h1>

                {/* Sección de Héroes */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Heroes</h2>
                    {favHeroes.length > 0 ? (
                        <ContainerCardHeroe heroes={favHeroes} />
                    ) : (
                        <p className="text-gray-600">No heroes added to favourites yet.</p>
                    )}
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Maps</h2>

                </div>

                {/* Botón para volver a Home */}
                <div className="mt-8">
                    <Button
                        className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded shadow-lg"
                        onClick={handleGoToHome}
                        name="Home"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Favourites