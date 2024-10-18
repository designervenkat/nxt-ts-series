// import Auth from "./components/context/auth-context/Auth"
// import { AuthContextProvider } from "./components/context/auth-context/AuthContext"
// import Card from "./components/context/theme-context/Card"
// import { ThemeContextProvider } from "./components/context/theme-context/ThemeContext"


import { CustomButton } from "./components/html/Button"
import Card from "./components/html/Card"

function App() {
  

   return (
    <>
    {/* <ThemeContextProvider>
        <Card />
    </ThemeContextProvider>

    
    <AuthContextProvider>
        <Auth />
    </AuthContextProvider> */}


  


        <Card />

           <CustomButton variants="secondary" onClick={() => console.log("Clicked from App tsx")}>
       CLicked
    </CustomButton>


    </>

   

   )
}

export default App
