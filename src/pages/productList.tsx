import { productData } from "../data/items";
import Product from "../components/Product";

function ProductList() {
  return (
    <div className="product-list">
      <div className="product-items">
        {productData.map((item) => (
          <Product key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
