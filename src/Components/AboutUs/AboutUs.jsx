import { useNavigate } from "react-router-dom"
import { NAVEGACION } from "../../Utils/const"
import Button from "../Button/Button"
import ContainerAboutUs from "../Containers/ContainerAboutUs/ContainerAboutUs"
import Navbar from "../Navbar/Navbar"

const AboutUs = () => {

    const navigate = useNavigate()
    const handleGoToHome = () => {
        navigate(NAVEGACION.home)
    }

    return (
        <>
            <Navbar />
            <ContainerAboutUs />
            <Button
                className="fixed bottom-6 right-6 z-50 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded shadow-lg"
                onClick={handleGoToHome}
                name={"Home"} />
        </>
    )
}

export default AboutUs