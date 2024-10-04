type GreetPros = {
    name: string,
    lessonNum: number
    isLoggedIn: boolean
}


// export const Greeting = (props: GreetPros) => {
//     return (
//         <div>
//             <h2>Welcome to {props.name}! And this is lesson {props.lessonNum}</h2>
//         </div>
//     )
// }

// Recommened way of handling data types and definations
// export const Greeting = ({name, lessonNum}: GreetPros) => {
//     return (
//         <div>
//             <h2>Welcome to {name}! And this is lesson {lessonNum}</h2>
//         </div>
//     )
// }

// export const Greeting = ({name, lessonNum, id}:{name:string, lessonNum: number, id:number}) => {
//     return (
//         <div>
//             <h2>Welcome to {name}! And this is lesson {lessonNum}</h2>
//         </div>
//     )
// }


// conditional rendering
export const Greeting = ({name, lessonNum, isLoggedIn}: GreetPros) => {
    return (
        <div>
            {isLoggedIn ? `Welcome to ${name}! And this is lesson ${lessonNum}` : "Welcome Guest!"}            
        </div>
    )
}