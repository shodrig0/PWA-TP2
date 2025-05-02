import { useNavigate } from "react-router-dom"
import { NAVEGACION } from "../../utils/const"
import Button from "../../Components/Button/Button"


const PageNotFound = () => {

    const navite = useNavigate()
    const handleBackToHome = () => {
        navite(NAVEGACION.home)
    }

    return (
        <>
            <h2>404 Error</h2>
            <p>Oops! The page you're looking for does not exist :/</p>
            <Button onClick={handleBackToHome} className="btn-success bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded" name={"Back to Home!"} />
        </>
    )
}

export default PageNotFound