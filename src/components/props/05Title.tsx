type TitleProps = {
    children: string
}


export const Title = ({children}:TitleProps)  => {
    return (
        <div>
            <h2>Title Children as Props</h2>     
            <p>{children}</p>      
        </div>
    )
}