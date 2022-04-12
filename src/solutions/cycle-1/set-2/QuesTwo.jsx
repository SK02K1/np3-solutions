import { useState } from "react";

export const data = [
  {
    id: 1,
    item: "JavaScript"
  },
  {
    id: 2,
    item: "Python"
  },
  {
    id: 3,
    item: "Scala"
  },
  {
    id: 4,
    item: "Solidity"
  },
  {
    id: 5,
    item: "C++"
  }
];

export const QuesTwo = () => {
  const [languages, setLanguages] = useState(data);
  const removeBtnHandler = (languageID) => {
    setLanguages((prevLanguages) =>
      prevLanguages.filter(({ id }) => id !== languageID)
    );
  };
  return (
    <div className="solution">
      <h2>problem: C1S2Q2</h2>
      <p>
        Ques: Here is a list of items. Add a remove button for these items. With
        every click of the remove button, remove one item from the list.
      </p>
      <ul>
        {languages.map(({ id, item }) => {
          return (
            <li className="list-item" key={id}>
              <span>{item}</span> {" || "}
              <button onClick={() => removeBtnHandler(id)}>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
