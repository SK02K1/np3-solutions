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

export const QuesTwo = () => {
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

  return (
    <div className="solution">
      <h2>problem: C1S1Q2</h2>
      <p>
        Ques: You have a list of items with price and quantity. Create two
        buttons for each and every element in the data list. One will increment
        the quantity of the particular item, and one will decrement the
        quantity. Show all details of the items on the page.
      </p>
      <div>
        {products.map((productInfo) => {
          const { id, item, price, quantity } = productInfo;
          return (
            <div className="list-item" key={id}>
              <span>
                {item}({price}$)
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
    </div>
  );
};
