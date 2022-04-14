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

export const StarQues = () => {
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

  const removeProduct = (selectedProduct) => {
    setProductsData((prevData) =>
      prevData.map((data) => ({
        ...data,
        products: data.products.filter((product) => product !== selectedProduct)
      }))
    );
  };

  const removeCategory = (selectedCategory) => {
    setProductsData((prevData) =>
      prevData.filter(({ category }) => category !== selectedCategory)
    );
  };

  return (
    <div className="solution">
      <h2>problem: C1S4QS</h2>
      <p>
        Extending the first question, add delete functionality as such if the
        user clicks on any item it gets deleted and if the user clicks on any
        category, all the items within the category and that category itself
        gets deleted.
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
              <h3 onClick={() => removeCategory(category)}>{category}</h3>
              <div>
                {products.map((product) => {
                  return (
                    <div
                      onClick={() => removeProduct(product)}
                      className="list-item"
                      key={product}
                    >
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
