import { useState } from "react"

type User ={
    name: string,
    email: string
}

export const UserState =() => {

    const [user, setUser] = useState<User | null>(null)

    const handleLoggedIn = () => {
        setUser({
            name: "John",
            email: "john@gmail.com"
        })       
    }

    const handleLoggedOut = () => {
       setUser(null)
    }

    return (
        <div>

            <button type="button" onClick={handleLoggedIn}>Login</button>

            <button type="button" onClick={handleLoggedOut}>Logout</button>

            <h1>User is {user?.name} - {user?.email}</h1>
        </div>
    )
}