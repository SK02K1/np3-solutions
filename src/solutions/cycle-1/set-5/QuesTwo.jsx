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
  id: "",
  productPrice: ""
};

export const QuesTwo = () => {
  const [products, setProducts] = useState(data);
  const [formData, setFormData] = useState(initialFormData);

  const { id, productPrice } = formData;

  const inputChangeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: Number(e.target.value)
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setProducts((prevProducts) =>
      prevProducts.map((productData) =>
        productData.id === id ? { ...productData, productPrice } : productData
      )
    );
    setFormData({ ...initialFormData });
  };

  return (
    <div className="solution">
      <h2>problem: C1S5Q2</h2>
      <p>
        Ques: You have a list of items. Each item has an id, a name, and a
        price. You have to create 2 inputs. One input will take the id, the
        other will take a price. Use a submit button, to update the price of the
        id which is provided in the input fields.
      </p>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="productID">Product ID: </label>
          <input
            onChange={inputChangeHandler}
            type="text"
            name="id"
            value={id}
            id="productID"
            placeholder="Enter product ID"
            required
          />
        </div>
        <div>
          <label htmlFor="productPrice">Product Price: </label>
          <input
            onChange={inputChangeHandler}
            type="text"
            name="productPrice"
            value={productPrice}
            id="productPrice"
            placeholder="Enter new price"
            required
          />
        </div>
        <button>update</button>
      </form>
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
