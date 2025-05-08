import { useState, useEffect } from "react"
import Button from "../Button"

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    if (!visible) return null

    return (
        <Button
            name="↑"
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded shadow-lg"
        />
    )
}


export default ScrollToTop