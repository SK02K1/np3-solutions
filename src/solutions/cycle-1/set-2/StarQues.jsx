import { useState } from "react";
import { v4 as uuid } from "uuid";

export const data = [
  {
    id: uuid(),
    item: "JavaScript"
  },
  {
    id: uuid(),
    item: "Python"
  },
  {
    id: uuid(),
    item: "Scala"
  },
  {
    id: uuid(),
    item: "Solidity"
  },
  {
    id: uuid(),
    item: "C++"
  }
];

export const StarQues = () => {
  const [languages, setLanguages] = useState(data);
  const [showUndoControl, setShowUndoControl] = useState(false);
  const [removedLang, setRemovedLang] = useState(null);
  const removeBtnHandler = (languageData) => {
    const { id: languageID } = languageData;
    setLanguages((prevLanguages) =>
      prevLanguages.filter(({ id }) => id !== languageID)
    );
    setShowUndoControl(true);
    setRemovedLang(languageData);
  };

  const undoRemoveHandler = () => {
    setLanguages((prevLanguages) => prevLanguages.concat(removedLang));
    setShowUndoControl(false);
    setRemovedLang(null);
  };

  return (
    <div className="solution">
      <h2>C1S2QS</h2>
      <p>
        Ques: Extension of question 02 - after removing an item, show a "undo
        remove" button. On clicking this button, add back the item that was
        removed and hide this "undo remove" button.
      </p>
      {showUndoControl && (
        <button onClick={undoRemoveHandler}>Undo Remove</button>
      )}
      <ul>
        {languages.map((languageData) => {
          const { id, item } = languageData;
          return (
            <li className="list-item" key={id}>
              <span>{item}</span> {" || "}
              <button onClick={() => removeBtnHandler(languageData)}>
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
