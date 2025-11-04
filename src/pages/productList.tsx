import { useEffect } from "react";
import Product from "../components/Product";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProducts } from "../store/productSlice";

function ProductList() {
  const dispatch = useAppDispatch()
  const {items, loading, error} = useAppSelector((state) => state.products)
  
  useEffect(() =>{
    dispatch(fetchProducts())
  }, [dispatch])

  if(loading) return <p>loading...</p>
  if(error) return <p>Error: {error}</p>


  return (
    <div className="product-list">
      <div className="product-items">
        {items.map((item) => (
          <Product key={item._id} {...item}/>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
