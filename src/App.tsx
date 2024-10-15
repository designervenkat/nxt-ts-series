import Auth from "./components/context/auth-context/Auth"
import { AuthContextProvider } from "./components/context/auth-context/AuthContext"
import Card from "./components/context/theme-context/Card"
import { ThemeContextProvider } from "./components/context/theme-context/ThemeContext"

function App() {
  

   return (
    <>
    <ThemeContextProvider>
        <Card />
    </ThemeContextProvider>

    
    <AuthContextProvider>
        <Auth />
    </AuthContextProvider>
    </>

   )
}

export default App
