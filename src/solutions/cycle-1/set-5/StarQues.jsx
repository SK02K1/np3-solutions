import { useState } from "react";

const data = [
  {
    id: 1,
    productName: "Shoes",
    productPrice: 100
  },
  {
    id: 2,
    productName: "Jacket",
    productPrice: 400
  },
  {
    id: 3,
    productName: "Hat",
    productPrice: 50
  },
  {
    id: 4,
    productName: "Sunglasses",
    productPrice: 250
  },
  {
    id: 5,
    productName: "Gloves",
    productPrice: 300
  }
];

const initialFormData = {
  productName: "Shoes",
  productPrice: ""
};

export const StarQues = () => {
  const [products, setProducts] = useState(data);
  const [formData, setFormData] = useState(initialFormData);
  const productNames = products.map(({ productName }) => productName);
  const { productName, productPrice } = formData;

  const inputChangeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setProducts((prevProducts) =>
      prevProducts.map((productData) =>
        productData.productName === productName
          ? { ...productData, productPrice }
          : productData
      )
    );
    setFormData((prevFormData) => ({ ...prevFormData, productPrice: "" }));
  };

  return (
    <div className="solution">
      <h2>problem: C1S5QS</h2>
      <form onSubmit={submitHandler}>
        <select
          onChange={inputChangeHandler}
          name="productName"
          id="productName"
        >
          {productNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <input
          onChange={inputChangeHandler}
          type="number"
          min="1"
          name="productPrice"
          id="productPrice"
          value={productPrice}
          placeholder="Enter new price"
          required
        />
        <button>update</button>
      </form>

      <p>
        Ques: Make a dropdown of the product’s names instead of taking input.{" "}
        <span role="img" aria-label="grinning face with big eyes">
          😃
        </span>
      </p>
      <div>
        {products.map((productData) => {
          const { id, productName, productPrice } = productData;
          return (
            <div className="list-item" key={id}>
              <span>{id}</span> {" | "}
              <span>{productName}</span> {" | "}
              <span>$ {productPrice}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
