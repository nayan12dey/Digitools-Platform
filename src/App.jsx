
import { useState } from 'react'
import './App.css'
import Banner from './component/Banner'
import Footer from './component/Footer'
import NavBar from './component/NavBar'
import Pricing from './component/Pricing'
import Stats from './component/Stats'
import Steps from './component/Steps'
import Tools from './component/Tools'
import ToolsCard from './component/ToolsCard'



// products
const getTools = async() => {
    const response = await fetch("../public/products.json")
    
    return response.json();

}

const productPromise = getTools();





function App() {

  // tab active
  const [active, setActive] = useState("Products")



  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <Tools></Tools>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box flex justify-center bg-transparent gap-6">
        <input type="radio" name="my_tabs_1" className="tab bg-linear-to-r from-[#4F39F6] to-purple-600 text-white rounded-full px-6" aria-label="Products" defaultChecked onClick={() => setActive("Cart")}/>
        <input type="radio" name="my_tabs_1" className="tab" aria-label="Cart"  />
        
      </div>

      <ToolsCard productPromise={productPromise}></ToolsCard>


      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  )
}

export default App
