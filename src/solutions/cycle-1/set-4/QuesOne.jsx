import { useState } from "react";

const initialProductsData = [
  {
    category: "Fruit",
    products: ["Papaya", "Watermelon"]
  },
  {
    category: "Vegetable",
    products: ["Ladyfinger", "Brinjal"]
  }
];

export const QuesOne = () => {
  const [productsData, setProductsData] = useState(initialProductsData);
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("Fruit");

  const categories = productsData.map(({ category }) => category);

  const addNewCategory = (e) => {
    e.preventDefault();
    setProductsData((prevData) => prevData.concat({ category, products: [] }));
    setCategory("");
  };

  const addNewProduct = (e) => {
    e.preventDefault();
    setProductsData((prevData) =>
      prevData.map((data) => {
        const { category } = data;
        return category === productCategory
          ? { ...data, products: data.products.concat(productName) }
          : data;
      })
    );
    setProductName("");
  };

  return (
    <div className="solution">
      <h2>problem: C1S4Q1</h2>
      <p>
        Ques: Make a page that takes the following 2 inputs separately 1.
        Category name as a string (If the user adds a category it should be
        added in the category dropdown) 2. Then it will also take 2 inputs at
        once, the product name and its category (With the dropdown containing
        the added categories) The product name will be a string and the category
        input type will be a dropdown list of the categories the user-entered
        earlier Then save the data and render the list category wise
      </p>
      <form onSubmit={addNewCategory}>
        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          name="category"
          id="category"
          value={category}
          placeholder="add new category"
          required
        />
        <button>add new category</button>
      </form>
      <form onSubmit={addNewProduct}>
        <input
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          name="productName"
          id="productName"
          value={productName}
          placeholder="Enter product name"
          required
        />
        <select
          onChange={(e) => setProductCategory(e.target.value)}
          name="productCategory"
          id="productCategory"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button>add new product</button>
      </form>
      <div>
        {productsData.map(({ category, products }) => {
          return (
            <div key={category}>
              <h3>{category}</h3>
              <div>
                {products.map((product) => {
                  return (
                    <div className="list-item" key={product}>
                      {product}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
