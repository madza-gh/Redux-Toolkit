import { useAppDispatch, useAppSelector } from "../store/hooks"
import {type CartItem,addToCart, removeFromCart } from "../store/cart-slice"


function CartItems (){
    const cartItems = useAppSelector((state) => state.cart.items)
    const dispatch = useAppDispatch()

    const totalPrice = cartItems.reduce((value, item) => value + item.price * item.quantity,0)

    function handlePlus(item: CartItem){
        dispatch(addToCart(item))
    }

    function handleMinus(_id: string){
        dispatch(removeFromCart(_id))
    }

    return  (
        <div>
            {cartItems.length === 0 && <p>محصولی داخل سبد خرید یافت نشد</p>}
            <ul className="cart-items">
                {cartItems.map((item) => {
                    return(
                        <li key={item._id}>
                            <div>
                                <span>{item.title}</span>
                            </div>
                            <div className="cart-item-actions">
                            <button onClick={() => handleMinus(item._id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handlePlus(item)}>+</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            {cartItems.length > 0 && (
                <p className="cart-total-price">
                مجموع: <strong>{totalPrice}</strong> تومان
            </p>
            )}

        </div>
    )
}

export default CartItems