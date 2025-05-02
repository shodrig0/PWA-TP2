import { useNavigate } from "react-router-dom"
import { NAVEGACION } from "../../utils/const"
import Button from "../Button/Button"

const AboutUs = () => {

    const navigate = useNavigate()
    const handleGoToHome = () => {
        navigate(NAVEGACION.home)
    }

    return (
        <>
            <h2>prueba</h2>
            <Button className={``} onClick={handleGoToHome} name={"Back"} />
        </>
    )
}

export default AboutUs