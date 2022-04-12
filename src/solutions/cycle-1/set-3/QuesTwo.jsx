import { useState } from "react";

export const data = [
  {
    id: "c1",
    brand: "Toyota",
    make: "Corolla",
    model: "2007"
  },
  {
    id: "c2",
    brand: "Maruti Suzuki",
    make: "Omni",
    model: "2003"
  },
  {
    id: "c3",
    brand: "Hyundai",
    make: "Santro",
    model: "2005"
  }
];

const initialFormData = {
  brand: "",
  make: "",
  model: ""
};

export const QuesTwo = () => {
  const [cars, setCars] = useState(data);
  const [formData, setFormData] = useState(initialFormData);
  const { brand, make, model } = formData;

  const inputChangeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  const addNewCar = (e) => {
    e.preventDefault();
    setCars((prevCars) =>
      prevCars.concat({ id: `c${cars.length + 1}`, ...formData })
    );
    setFormData(initialFormData);
  };

  return (
    <div className="solution">
      <h2>C1S3Q2</h2>
      <p>
        Ques: Add a new object to the list of cars and display them on the
        screen
      </p>
      <form onSubmit={addNewCar}>
        <div>
          <label htmlFor="brand">Brand: </label>
          <input
            onChange={inputChangeHandler}
            type="text"
            name="brand"
            id="brand"
            value={brand}
            placeholder="Enter car brand"
            required
          />
        </div>
        <div>
          <label htmlFor="make">Make: </label>
          <input
            onChange={inputChangeHandler}
            type="text"
            name="make"
            id="make"
            value={make}
            placeholder="Enter car make"
            required
          />
        </div>
        <div>
          <label htmlFor="modek">Model: </label>
          <input
            onChange={inputChangeHandler}
            type="text"
            name="model"
            id="model"
            value={model}
            placeholder="Enter car model"
            required
          />
        </div>
        <button>add new car</button>
      </form>
      <div>
        {cars.map((carInfo) => {
          const { id, brand, make, model } = carInfo;
          return (
            <div key={id} className="list-item">
              <p>Brand: {brand}</p>
              <p>Make: {make}</p>
              <p>Model: {model}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
