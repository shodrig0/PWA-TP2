import { useNavigate } from "react-router-dom"
import { NAVEGACION } from "../../Utils/const"
import Button from "../../Components/Button/Button"


const PageNotFound = () => {

    const navite = useNavigate()
    const handleBackToHome = () => {
        navite(NAVEGACION.home)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
            <h2 className="text-6xl font-bold mb-4 text-orange-500">404</h2>
            <p className="text-lg mb-6">Oops! The page you're looking for does not exist :/</p>
            <Button onClick={handleBackToHome} className="btn-success bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded" name={"Back to Home!"} />
        </div>
    )
}

export default PageNotFound