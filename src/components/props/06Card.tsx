type CardProps = {
    children: React.ReactNode
}
export const Card = ({children}: CardProps)  => {
    return (
        <div>
            <h2>Children Components as Props</h2> 
            {children}         
        </div>
    )
}