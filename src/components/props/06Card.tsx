import ProductCard from "../styles/ProductCard"

type CardProps = {
    children: React.ReactNode
}
export const Card = ({children}: CardProps)  => {
    return (
        <div>
            <h2>Children Components as Props Card.jsx</h2> 
            {children}    
 
        </div>
    )
}