import React, { createContext, useState } from "react";

type AuthContextProps = {
    children: React.ReactNode
}

type AuthUser = {
    name: string,
    email: string
}


type AuthContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const AuthContext = createContext<AuthContextType | null>(null)
// export const AuthContext = createContext({} as AuthContextType) // 
    // Type assertion

export const AuthContextProvider = ({children}: AuthContextProps) => {

    const [user, setUser] = useState<AuthUser | null>(null)

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}