import ContainerAboutUs from "../../Components/Containers/ContainerAboutUs/ContainerAboutUs"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footerr/Footer"
import usePageTitle from "../../Hooks/usePageTitle"

const AboutUs = () => {

  usePageTitle()


  return (< div className="relative w-full min-h-screen  bg-center"
    style={{
      backgroundImage: `url('https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt912826400bb9b504/6308459c47fdc2115dced822/cloud-2600.jpg?format=webply&quality=90')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Header />
    <div
      style={{
        backgroundImage: "url('/bannerdos.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
      }}
    >
      <div className="w-full flex justify-center py-10">
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-xl max-w-4xl w-full mx-4 shadow-lg">
          <ContainerAboutUs />
        </div>
      </div>
    </div>

    <Footer />
  </div>

  )
}

export default AboutUs