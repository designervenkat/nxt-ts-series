import { ResuableLists } from "./components/generics/ResuableList"
import { PassNumber } from "./components/restrictions-num/Number"

function App() {
    const superHeros = [
        {firstName: "Superman", lastName: "Clark", age: 20}
    ]

   return (
    <>
    
   

    {/* List countries  */}
    <ResuableLists 
        items={["India", "US", "China"]} // Array of strings[]
        onClick={(item) => console.log(item)
    }/>


    {/* List year  */}
    <ResuableLists 
        items={[2001, 2002, 2004]} // Array of number[]
        onClick={(item) => console.log(item)
    }/>


    {/* Products key value pair {key-name} */}
    <ResuableLists 
        items={superHeros} // Array of objects[{ key | value }]
        onClick={(item) => console.log(item)
    }/>




    </>

   

   )
}

export default App
