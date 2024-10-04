type HeroProps = {
    data: {
        characterName: string,
        modelName: string
    }[]
}

export const SuperHeros = ({data}: HeroProps) => {
    return (
        <div>
            SuperHero character names and models
            {data && data.map(item => (
                <div key={item.characterName}>
                    {item.characterName} is {item.modelName}
                </div>
            ))} 
        </div>
    )
}