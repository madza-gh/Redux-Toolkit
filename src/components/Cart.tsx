import CartItems from "./CartItems";

type CartProps = {
  onClose: () => void;
};

function Cart({ onClose }: CartProps) {

  return (
    <>
      <dialog className="cart-modal" open>
        <h2>سبد خرید</h2>
        <CartItems />
        <p className="cart-actions">
          <button onClick={onClose}>بستن</button>
        </p>
      </dialog>
    </>
  );
}

export default Cart;
