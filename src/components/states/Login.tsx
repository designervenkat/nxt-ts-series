import { useState } from "react"

export const LoggedIn =() => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLoggedIn = () => {
        setIsLoggedIn(true)
    }

    const handleLoggedOut = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>

            <button type="button" onClick={handleLoggedIn}>Login</button>

            <button type="button" onClick={handleLoggedOut}>Logout</button>

            <h1>User is {isLoggedIn ? "logged in" : "logout"}</h1>
        </div>
    )
}