import { useAppDispatch } from "../store/hooks"

import { addToCart } from "../store/cart-slice"

import { Product as ProductType,  } from "../api/productApi"

function Product({_id, title, price}: ProductType){
    const dispatch = useAppDispatch()

    function handleAddToCart(){
        dispatch(addToCart({_id: _id!, title, price}))
    }

    return(
        <div className="product">
            {/* <img src={image} /> */}
            <div>
                <h3>{title}</h3>
                <p className="product-price">{price}</p>
            </div>
            <p className="product-actions">
                <button onClick={handleAddToCart}>افزودن به سبد خرید</button>
            </p>
        </div>
    )
}

export default Product