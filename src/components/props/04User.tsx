type UserProps = {
    data: {
        name: {
            firstName: string
            lastName: string
        },
        email?: string
        age?: number
    }
}
export const User = ({data}:UserProps)  => {
    const {name:{firstName, lastName}, email, age} = data
    return (
        <div>
            <h2>User Props</h2>
            <p>Welcome {firstName}-{lastName}</p>
            {email &&  <p>Email =  {email}</p>}
            {age && <p>Age =  {age}</p>}
        </div>
    )

    
}