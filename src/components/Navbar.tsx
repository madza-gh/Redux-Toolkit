import { useState } from "react"
import Cart from "./Cart"

function Navbar (){
   const [cartIsOpen, setCartIsOpen] = useState(false) 

   function handleOpenCart(){
    setCartIsOpen(true)
   }

   function handleCloseCart(){
    setCartIsOpen(false)
   }

   return(
    <>
        {cartIsOpen && <Cart onClose={handleCloseCart}/>}

        <div className="navbar">
            <button onClick={handleOpenCart}>سبد خرید (0)</button>
        </div>
    </>
   )
}

export default Navbar