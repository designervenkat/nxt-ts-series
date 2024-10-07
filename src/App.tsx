import { Card } from './components/props/06Card'
import ProductCard from './components/styles/ProductCard'

function App() {
   //  data is coming from server or database
   //    const superHeros = [
   //       {
   //          characterName: 'Ironman',
   //          modelName: 'Tony',
   //       },
   //       {
   //          characterName: 'Flash',
   //          modelName: 'Berry',
   //       },
   //       {
   //          characterName: 'Batman',
   //          modelName: 'Bruce',
   //       },
   //    ]

   //    const userDetail = {
   //       name: {
   //          firstName: 'Tony',
   //          lastName: 'Stark',
   //       },
   //    }

   return (
      <div className='grid grid-cols-1 gap-y-6 mx-auto max-w-screen-lg'>
         <h1 className='text-slate-600'>TypeScript + React</h1>
         <ProductCard
            title='Product 1'
            style={{ padding: '20px', borderRadius: '20px', display: 'block' }}
            className='bg-green-200'
         />

         <ProductCard
            title='Product 2'
            style={{ padding: '20px', borderRadius: '20px', display: 'block' }}
            className='bg-yellow-200'
         />

         <ProductCard
            title='Product 3'
            style={{ padding: '20px', borderRadius: '20px', display: 'block' }}
            className='bg-green-200'
         />
      </div>
   )
}

export default App
