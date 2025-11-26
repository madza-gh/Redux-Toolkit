import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createProduct } from "../store/productSlice";
import { Navigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  //const [image, setImage] = useState<File | null>(null)

  const dispatch = useAppDispatch()
  const {userInfo} = useAppSelector((state) => state.user)
  
  //const imageUrl = image ? URL.createObjectURL(image) : ""

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(createProduct({
      title,
      price: parseFloat(price),
    }))

    console.log("product added", { title, price });

    setTitle("");
    setPrice("");
  };

  if(!userInfo || userInfo.role !== 'admin'){
    return (
      <Navigate to={'/'} replace/>
    )
  }

  return (
    <section className="add-product">
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
        {/* <div>
          <label>عکس</label>
          <input 
          type="file" 
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if(file){
              setImage(file)
            }
          }}
          />
        </div> */}
        <button type="submit">اضافه کردن محصول</button>
      </form>
    </section>
  );
}

export default AddProduct;
