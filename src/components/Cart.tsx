import CartItems from "./CartItems";

type CartProps = {
  onClose: () => void;
};

function Cart({ onClose }: CartProps) {

  const handleBackdropClick = () => onClose();

  const handleModalClick = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <>
      <div className="cart-backdrop" onClick={handleBackdropClick}>
        <div className="cart-modal" role="dialog" aria-modal="true" onClick={handleModalClick}>
          <h2>سبد خرید</h2>
          <CartItems />
          <p className="cart-actions">
            <button onClick={onClose}>بستن</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Cart;
