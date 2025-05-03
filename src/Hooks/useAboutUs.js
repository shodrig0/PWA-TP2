import { useState, useEffect } from "react"

const useAboutUs = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        const usernames = ['pachecoleoo', 'Esteban0010', 'shodrig0']
        const getUsers = async () => {
            try {
                const promises = usernames.map(username =>
                    fetch(`https://api.github.com/users/${username}`).then(resp => {
                        if (!resp.ok) {
                            throw new Error(`No user ${username}`)
                        }
                        return resp.json()
                    })
                )
                const data = await Promise.all(promises)
                setUser(data)
            } catch (error) {
                console.log('Error', error)
            }
            console.log(usernames)
        }
        getUsers()
    }, [])

    return user

}

export default useAboutUs