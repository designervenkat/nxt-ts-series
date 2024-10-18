import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CustomButton } from './components/html/Button.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
    <App />
   
   <CustomButton variants='ghost' title='somebutton' onClick={() => console.log("Main tsx clicked")}>
    Main tsx
   </CustomButton>
    </>
  </StrictMode>,
)
