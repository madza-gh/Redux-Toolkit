import Product from "../components/Product";
import { useAppSelector } from "../store/hooks";

function ProductList() {

  const products = useAppSelector((state) => state.products.items)
  
  return (
    <div className="product-list">
      <div className="product-items">
        {products.map((item) => (
          <Product key={item._id} {...item}/>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
