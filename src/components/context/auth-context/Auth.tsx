import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

export default function Auth() {

    const authContext = useContext(AuthContext)

   const handleLogin = ()  => {
     if(authContext){
        authContext.setUser({
            name: 'John',
            email: "john@gmail.com"
        })
    }
    // Type assertion
    // authContext.setUser({
    //         name: 'John',
    //         email: "john@gmail.com"
    //     })
   }

   const handleLogout= ()  => {
    if(authContext){
        authContext.setUser(null)
    }

    // Type assertion
    // authContext.setUser(null)
   }

  return (
    <div>
        <h2>Authentication</h2>        

        <div> Username is {authContext?.user?.name}</div>
        <div> User email is {authContext?.user?.email}</div>


        <button className='bg-slate-500 px-6 py-3 mx-2 ' type="button" onClick={handleLogin}>Login</button>
        <button className='bg-slate-500 px-6 py-3 mx-2 ' type="button" onClick={handleLogout}>Logout</button>
        
    </div>
  )
}
