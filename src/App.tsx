// import Auth from "./components/context/auth-context/Auth"
// import { AuthContextProvider } from "./components/context/auth-context/AuthContext"
// import Card from "./components/context/theme-context/Card"
// import { ThemeContextProvider } from "./components/context/theme-context/ThemeContext"

import ComponentPros from "./components/componentProps/ComponentPros"
import Profile from "./components/componentProps/Profile"

function App() {
  

   return (
    <>
    {/* <ThemeContextProvider>
        <Card />
    </ThemeContextProvider>

    
    <AuthContextProvider>
        <Auth />
    </AuthContextProvider> */}


    <ComponentPros isLoggedIn={true} component={Profile}/>
    </>

   )
}

export default App
