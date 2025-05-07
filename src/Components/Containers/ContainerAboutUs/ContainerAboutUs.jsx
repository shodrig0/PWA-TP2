import useAboutUs from "../../../Hooks/useAboutUs"
import Title from "../../Title/Title"

const ContainerAboutUs = () => {

    const user = useAboutUs()

    return (
        <section className="p-6 max-w-6xl mx-auto text-white mt-30">
            <div className=" rounded-2xl  backdrop-blur-[5px] shadow-lg overflow-hidden">
                <Title className="text-3xl font-bold text-center py-6 " title={"Development Team"} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    {user.map((u) => (
                        <div
                            key={u.login}
                            className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={u.avatar_url}
                                className="w-full h-64 object-cover"
                                alt={u.login}
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold text-center text-orange-400">
                                    {u.name || u.login}
                                </h2>
                                <p className="text-center text-gray-400 mt-2">{u.bio}</p>
                                <a
                                    href={u.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block mt-4 text-center text-blue-400 hover:underline"
                                >
                                    GitHub Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContainerAboutUs