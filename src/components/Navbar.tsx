import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

import { useAppSelector } from "../store/hooks";

function Navbar() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce((value, item) => value + item.quantity, 0)
  );

  function handleOpenCart() {
    setCartIsOpen(true);
  }

  function handleCloseCart() {
    setCartIsOpen(false);
  }

  return (
    <>
      {cartIsOpen && <Cart onClose={handleCloseCart} />}

      <div className="navbar">
        <Link to={"/"} className="nav-link">
          صفحه اصلی
        </Link>

        <Link to={"add-product"} className="nav-link">
          افزودن محصول
        </Link>

        <button onClick={handleOpenCart}>سبد خرید ({cartQuantity})</button>
      </div>
    </>
  );
}

export default Navbar;
