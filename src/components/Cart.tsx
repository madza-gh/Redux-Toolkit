import { createPortal } from "react-dom";
import CartItems from "./CartItems";
import { useEffect } from "react";

type CartProps = {
  onClose: () => void;
};

function Cart({ onClose }: CartProps) {

  const handleBackdropClick = () =>{
    onClose()
  }

  const handleDialogClick = (e: React.MouseEvent) =>{
    e.stopPropagation()
  }

  useEffect(() =>{
    const handleEscapeKey = (e: globalThis.KeyboardEvent) =>{
      if(e.key === "Escape"){
        onClose()
      }
    }
    document.addEventListener("keydown", handleEscapeKey)

    return () =>{
      document.removeEventListener("keydown", handleEscapeKey)
    }

  }, [onClose])

  return createPortal(
    <>
      <div onClick={handleBackdropClick} className="cart-backdrop" >
        <dialog onClick={handleDialogClick} className="cart-modal" open>
          <h2>سبد خرید</h2>
          <CartItems />
          <p className="cart-actions">
            <button onClick={onClose}>بستن</button>
          </p>
        </dialog>
      </div>
    </>,
    document.getElementById("modal")!
  );
}

export default Cart;
