import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Card() {
   const theme = useContext(ThemeContext)
   return (
      <div
         style={{
            backgroundColor: theme.primaryTheme.background,
            color: theme.primaryTheme.text,
         }}>
         Card
      </div>
   )
}
