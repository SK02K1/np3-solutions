import { useState } from "react";

export const data = [
  {
    id: 1,
    item: "shoes",
    price: 100,
    quantity: 1
  },
  {
    id: 2,
    item: "jacket",
    price: 400,
    quantity: 1
  },
  {
    id: 3,
    item: "hat",
    price: 50,
    quantity: 1
  },
  {
    id: 4,
    item: "sunglasses",
    price: 250,
    quantity: 1
  },
  {
    id: 5,
    item: "gloves",
    price: 300,
    quantity: 1
  }
];

const getTotalPrice = (products) =>
  products.reduce((totalPrice, { price, quantity }) => {
    return totalPrice + price * quantity;
  }, 0);

export const StarQues = () => {
  const [products, setProducts] = useState(data);

  const handleIncrement = (productID) => {
    setProducts((prevProducts) =>
      prevProducts.map((productInfo) => {
        return productInfo.id === productID
          ? { ...productInfo, quantity: productInfo.quantity + 1 }
          : productInfo;
      })
    );
  };

  const handleDecrement = (productID) => {
    setProducts((prevProducts) =>
      prevProducts.map((productInfo) => {
        return productInfo.id === productID
          ? { ...productInfo, quantity: productInfo.quantity - 1 }
          : productInfo;
      })
    );
  };

  const totalPrice = getTotalPrice(products);

  return (
    <div className="solution">
      <h2>problem: C1S1QS</h2>
      <p>
        Extension of question02 - show the total price at the end of the list
        which would be the sum of (price * quantity) for all items
      </p>
      <div>
        {products.map((productInfo) => {
          const { id, item, price, quantity } = productInfo;
          return (
            <div className="list-item" key={id}>
              <span>
                {item}({price * quantity}$)
              </span>{" "}
              {" | "}
              <button
                onClick={() => handleDecrement(id)}
                disabled={quantity === 1}
              >
                -
              </button>
              <span> [{quantity}] </span>
              <button onClick={() => handleIncrement(id)}>+</button>
            </div>
          );
        })}
      </div>
      <h4>Total: {totalPrice}</h4>
    </div>
  );
};
