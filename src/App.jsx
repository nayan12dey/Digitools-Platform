
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
import Cart from './component/Cart'



// products
const getTools = async() => {
    const response = await fetch("/products.json")
    
    return response.json();

}

const productPromise = getTools();





function App() {

  // tab active
  const [activeTab, setActiveTab] = useState("products")

  // cart state to get data
  const [carts, setCarts] = useState([])



  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <Tools></Tools>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box flex justify-center bg-transparent gap-6">
        <input type="radio" name="my_tabs_1" className="tab rounded-full px-6" aria-label="Products" defaultChecked onClick={() => setActiveTab("products")}/>
        <input type="radio" name="my_tabs_1" className="tab rounded-full px-6" aria-label="Cart" onClick={() => setActiveTab("cart") }  />
        
      </div>

       {activeTab === "products" && <ToolsCard productPromise={productPromise} carts={carts} setCarts={setCarts}></ToolsCard>}

       {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}

      {/* <ToolsCard productPromise={productPromise}></ToolsCard> */}

      


      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  )
}

export default App
