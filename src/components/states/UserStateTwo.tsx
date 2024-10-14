import { useState } from "react"

type User ={
    name: string,
    email: string
}

export const UserStateTwo =() => {

    const [user, setUser] = useState<User>({} as User)

    const handleLoggedIn = () => {
        setUser({
            name: "John",
            email: "john@gmail.com"
        })       
    }

    return (
        <div>

            <button type="button" onClick={handleLoggedIn}>Login</button>

            <h1>User is {user.name} - {user.email}</h1>
        </div>
    )
}