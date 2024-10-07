import ProductCard from "./components/styles/ProductCard";


export default function Home() {
  return (
    <div>
        Home.page

         <ProductCard
            title='Product 4 from Home Page'
            style={{ padding: '20px', borderRadius: '20px', display: 'block' }}
            className='bg-purple-500'
         />    
        
    </div>
  )
}
