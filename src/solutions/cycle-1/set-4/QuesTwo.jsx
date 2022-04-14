import { useState } from "react";

const initialFormData = {
  user: "",
  name: "",
  phone: ""
};

const fields = [
  {
    id: 1,
    name: "user",
    type: "text",
    isEditModeActive: true
  },
  {
    id: 2,
    name: "name",
    type: "text",
    isEditModeActive: true
  },
  {
    id: 3,
    name: "phone",
    type: "tel",
    isEditModeActive: true
  }
];

export const QuesTwo = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formFileds, setFormFileds] = useState(fields);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { user, name, phone } = formData;

  const inputChangeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setFormFileds((prevFormFields) =>
      prevFormFields.map((fieldData) => ({
        ...fieldData,
        isEditModeActive: false
      }))
    );
  };

  const editBtnHandler = (fieldID) => {
    setFormFileds((prevFormFields) =>
      formFileds.map((fieldData) =>
        fieldData.id === fieldID
          ? { ...fieldData, isEditModeActive: true }
          : fieldData
      )
    );
  };

  return (
    <div className="solution">
      <h2>problem: C1S4Q2</h2>
      <p>
        Ques: Make a form, which will take the following 3 inputs from the user,
        name, email, and mobile number And the form will have a save button at
        the end. When the user completes the form, the user should be able to
        save it. After saving data, **show a success message.** After data is
        submitted input fields should be disabled. Then, Besides every field,
        there should be an edit button, which allows users to edit the field and
        save it.
      </p>
      <form onSubmit={submitHandler}>
        {formFileds.map((fieldData) => {
          const { id, name, type, isEditModeActive } = fieldData;
          return (
            <div key={id}>
              <input
                onChange={inputChangeHandler}
                type={type}
                name={name}
                id={name}
                placeholder={`Enter ${name}`}
                disabled={!isEditModeActive}
                required
              />
              <button
                onClick={() => editBtnHandler(id)}
                type="button"
                disabled={!isFormSubmitted}
              >
                Edit
              </button>
            </div>
          );
        })}
        <button>Submit</button>
      </form>
      {isFormSubmitted && <h3>Data Saved</h3>}
    </div>
  );
};
