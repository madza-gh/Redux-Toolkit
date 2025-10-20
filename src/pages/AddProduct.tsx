import { useState } from "react";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
              e.target.value;
            }}
          />
        </div>
        <div>
          <label>قیمت: </label>
          <input
            type="text"
            value={price}
            onChange={(e) => {
              e.target.value;
            }}
          />
        </div>
        <button type="submit">اضافه کردن محصول</button>
      </form>
    </section>
  );
}

export default AddProduct;
