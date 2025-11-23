import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import LoginModal from "./LoginModal";
import {openLoginModal} from '../store/uiSlice'
import { logout } from "../store/userSlice";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import SignupModal from "./SignupModal";

function Navbar() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const dispatch = useAppDispatch()

  const {userInfo} = useAppSelector((state) => state.user)

  const isOpen = useAppSelector(state => state.ui.loginModalOpen)
  const isSignupOpen = useAppSelector(state => state.ui.signupModalOpen)

  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce((value, item) => value + item.quantity, 0)
  );

  function handleOpenCart() {
    setCartIsOpen(true);
  }

  function handleCloseCart() {
    setCartIsOpen(false);
  }

  function handleOpenLogin(){
    dispatch(openLoginModal())
  }

  function handleLogOut(){
    dispatch(logout())
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

        { !userInfo && <button onClick={handleOpenLogin}>ورود</button>}

        {userInfo && <div className="user-nav">
          <span>{userInfo.name}</span>
          <button onClick={handleLogOut}>خروج</button>
          </div>}

        {isOpen && <LoginModal/>}
        {isSignupOpen && <SignupModal/>}
        
      </div>
    </>
  );
}

export default Navbar;
