import { useState } from "react";

export const data = [
  {
    id: 1,
    item: "shoes",
    price: 100
  },
  {
    id: 2,
    item: "jacket",
    price: 400
  },
  {
    id: 3,
    item: "hat",
    price: 50
  },
  {
    id: 4,
    item: "sunglasses",
    price: 250
  },
  {
    id: 5,
    item: "gloves",
    price: 300
  }
];

const getProductPrices = (products) => products.map(({ price }) => price);

const getMinPrice = (products) => Math.min(...getProductPrices(products));

const getMaxPrice = (products) => Math.max(...getProductPrices(products));

const filterByPriceRange = ({ products, upperLimit, lowerLimit }) =>
  products.filter(({ price }) => price >= lowerLimit && price <= upperLimit);

export const QuesOne = () => {
  const [products, setProducts] = useState(data);
  const [lowerLimit, setLowerLimit] = useState(() => getMinPrice(products));
  const [upperLimit, setUpperLimit] = useState(() => getMaxPrice(products));

  const filteredProducts = filterByPriceRange({
    products,
    upperLimit,
    lowerLimit
  });

  return (
    <div className="solution">
      <h2>problem: C1S1Q1</h2>
      <p>
        Ques: Filter list of items using price Take 2 inputs from the user. A
        lower price, and an upper price. List only the products which fall in
        between the lower and upper price range.
      </p>
      <div>
        <label htmlFor="lowerLimit">Lower Limit: </label>
        <input
          onChange={(e) => setLowerLimit(Number(e.target.value))}
          type="number"
          name="priceRange"
          value={lowerLimit}
          id="lowerLimit"
          placeholder="Enter lower limit"
        />
      </div>
      <div>
        <label htmlFor="upperLimit">Upper Limit: </label>
        <input
          onChange={(e) => setUpperLimit(Number(e.target.value))}
          type="number"
          name="priceRange"
          value={upperLimit}
          id="upperLimit"
          placeholder="Enter upper limit"
        />
      </div>
      <div>
        {filteredProducts.map((productInfo) => {
          const { id, item, price } = productInfo;
          return (
            <div className="list-item" key={id}>
              <span>{item}</span> {" - "}
              <span>{price}$</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
