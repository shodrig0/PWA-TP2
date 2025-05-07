import { useNavigate } from "react-router-dom"
import { NAVEGACION } from "../../Const/const"
import Button from "../../Components/Button/Button"
import ContainerAboutUs from "../../Components/Containers/ContainerAboutUs/ContainerAboutUs"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footerr/Footer"
import usePageTitle from "../../Hooks/usePageTitle"

const AboutUs = () => {

    usePageTitle()

    const navigate = useNavigate()
    const handleGoToHome = () => {
        navigate(NAVEGACION.home)
    }

    return (
        <>
            <Header />
            <ContainerAboutUs />
            <Button
                className="fixed bottom-6 right-6 z-50 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded shadow-lg"
                onClick={handleGoToHome}
                name={"Home"} />
            <Footer />
        </>
    )
}

export default AboutUs