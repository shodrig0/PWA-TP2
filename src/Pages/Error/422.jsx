import { useNavigate } from "react-router-dom"
import { NAVEGACION } from "../../Utils/const"
import { useEffect } from "react"
import Button from "../../Components/Button/Button"

const PageValidationError = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const timeoutPage = setTimeout(() => {
            navigate(NAVEGACION.home)
        }, 4000)

        return () => clearTimeout(timeoutPage)
    }, [navigate])

    const handleRedirectionHome = () => {
        navigate(NAVEGACION.home)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
            <h2 className="text-6xl font-bold mb-4 text-orange-500">422 Error</h2>
            <p className="text-lg mb-6">Oops! You need more parameters to be here :/</p>
            <p className="text-lg mb-6">You're being redirected. Just wait a moment or click the button!</p>
            <Button onClick={handleRedirectionHome} className="btn-success bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded" name={"Back to Home!"} />
        </div>
    )
}

export default PageValidationError