import { Greeting } from "./components/props/Greet"
import { State } from "./components/props/State"
import { SuperHeros } from "./components/props/SuperHeros"

function App() {

    //  data is coming from server or database
    const superHeros = [
        {
            characterName: "Ironman",
            modelName: "Tony"
        },
        {
            characterName: "Flash",
            modelName: "Berry"
        },
        {
            characterName: "Batman",
            modelName: "Bruce"
        }
    ]

  return (
    <div className="grid grid-cols-1 gap-y-6">
      <h1 className="text-slate-600">TypeScript + React</h1>
      <Greeting name="TypeScript" lessonNum={2} isLoggedIn/>
      <State state="success"/>
      <SuperHeros data={superHeros}/>
    </div>
  )
}

export default App
