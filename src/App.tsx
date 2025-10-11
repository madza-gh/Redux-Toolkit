import { Provider } from "react-redux";

import { store } from "./store/store";

import Navbar from "./components/Navbar";
import Product from "./components/product";
import ProductList from "./components/productList";

import { productData } from "./data/items";

function app() {
  return (
    <Provider store={store}>
      <Navbar/>
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
