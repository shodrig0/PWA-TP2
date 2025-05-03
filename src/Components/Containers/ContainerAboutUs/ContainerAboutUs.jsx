import useAboutUs from "../../../Hooks/useAboutUs"

const ContainerAboutUs = () => {

    const user = useAboutUs()

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {user.map((u) => (
                <div key={u.login} className="bg-white shadow p-4 rounded">
                    <img src={u.avatar_url} className="w-64 h-64 mx-auto rounded-full" alt={u.login} />
                    <h2 className="text-xl font-semibold text-center mt-2"> {u.name || u.login}</h2>
                    <p className="text-center text-gray-600">{u.bio}</p>
                    <a href={u.html_url} target="_blank" rel="noopener noreferrer" className="block mt-2 text-center text-blue-500">
                        GitHub Profile
                    </a>
                </div>
            ))}
        </div>
    )
}

export default ContainerAboutUs