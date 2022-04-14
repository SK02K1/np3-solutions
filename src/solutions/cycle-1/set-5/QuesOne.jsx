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

const getSortedProducts = (products, sortBy) => {
  switch (sortBy) {
    case "LOW_TO_HIGH":
      return [...products].sort((a, b) => a.productPrice - b.productPrice);
    case "HIGH_TO_LOW":
      return [...products].sort((a, b) => b.productPrice - a.productPrice);
    default:
      return [...products];
  }
};

export const QuesOne = () => {
  const [products, setProducts] = useState(data);
  const [sortBy, setSortBy] = useState(null);

  const sortByHandler = (action) => setSortBy(action);
  const sortedProducts = getSortedProducts(products, sortBy);

  return (
    <div className="solution">
      <h2>problem: C1S5Q1</h2>
      <p>
        Ques: You have a list of items on the page. Create two buttons to sort
        them by price, one in asc order, and the other in desc order.{" "}
      </p>
      <button onClick={() => sortByHandler("LOW_TO_HIGH")}>Sort Asc</button>
      <button onClick={() => sortByHandler("HIGH_TO_LOW")}>Sort Desc</button>
      <div>
        {sortedProducts.map((productData) => {
          const { id, productName, productPrice } = productData;
          return (
            <div key={id} className="list-item">
              <span>{productName}</span> {" || "}
              <span>$ {productPrice}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
