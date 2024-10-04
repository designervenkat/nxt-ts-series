import { Button, ButtonWithEvent } from './components/events/Button'
import { Input } from './components/events/Input'
import { Greeting } from './components/props/00Greet'
import { State } from './components/props/01State'
import { SuperHeros } from './components/props/03SuperHeros'
import { User } from './components/props/04User'
import { Title } from './components/props/05Title'
import { Card } from './components/props/06Card'

function App() {
   //  data is coming from server or database
   const superHeros = [
      {
         characterName: 'Ironman',
         modelName: 'Tony',
      },
      {
         characterName: 'Flash',
         modelName: 'Berry',
      },
      {
         characterName: 'Batman',
         modelName: 'Bruce',
      },
   ]

   const userDetail = {
      name: {
         firstName: 'Tony',
         lastName: 'Stark',
      },
   }

   return (
      <div className='grid grid-cols-1 gap-y-6'>
         <h1 className='text-slate-600'>TypeScript + React</h1>
         <Button handleClick={() => console.log('Clicked me')} />
         <ButtonWithEvent
            handleClick={(e, id) => {
               console.log(e, id)
            }}
         />
         <Input
            value=''
            handleChange={(e) => console.log(e)}
         />
      </div>
   )
}

export default App
