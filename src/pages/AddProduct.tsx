import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addProduct } from "../store/productSlice";
import { v4 as uuidv4 } from "uuid"

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useAppDispatch()

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addProduct({
      id: uuidv4(),
      title,
      price: parseFloat(price)}))

    console.log("product added", { title, price });

    setTitle("");
    setPrice("");
  };

  return (
    <section>
      <h2>صفحه افزودن محصول</h2>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>نام محصول: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label>قیمت: </label>
          <input
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <button type="submit">اضافه کردن محصول</button>
      </form>
    </section>
  );
}

export default AddProduct;
