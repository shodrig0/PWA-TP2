import { useNavigate } from "react-router-dom"
import { NAVEGACION } from "../../utils/const"
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
        <>
            <h2>422 Error</h2>
            <p>Oops! You need more parameters to be here :/</p>
            <p>You're being redirected. Just wait a moment or click the button!</p>
            <Button onClick={handleRedirectionHome} className="btn-success bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded" name={"Back to Home!"} />
        </>
    )
}

export default PageValidationError