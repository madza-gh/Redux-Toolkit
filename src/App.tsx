import { Provider } from "react-redux";

import { store } from "./store/store";

import { Route, Routes, Link } from "react-router-dom";

import Navbar from "./components/Navbar";

import ProductList from "./pages/productList";
import AddProduct from "./pages/AddProduct";


function app() {
  return (
    <Provider store={store}>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={<ProductList/>}
          />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="*" element={<h2>404 not found</h2>} />
        </Routes>
      </main>
    </Provider>
  );
}

export default app;
