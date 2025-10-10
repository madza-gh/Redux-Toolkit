import { Provider } from "react-redux";

import { store } from "./store/store";

import Product from "./components/product";
import ProductList from "./components/productList";

import { productData } from "./data/items";

function app() {
  return (
    <Provider store={store}>
      <ProductList>
        {productData.map((item) => (
          <div key={item.id}>
            <Product {...item} />
          </div>
        ))}
      </ProductList>
    </Provider>
  );
}

export default app;
