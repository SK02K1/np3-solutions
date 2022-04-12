import { useState } from "react";
import { v4 as uuid } from "uuid";

const initialTodos = [
  {
    id: uuid(),
    task: "testing you are!",
    isCompleted: false
  }
];

export const StarQues = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [todo, setTodo] = useState("");

  const addNewTodo = (e) => {
    e.preventDefault();
    setTodos((prevTodos) =>
      prevTodos.concat({ id: uuid(), task: todo, isCompleted: false })
    );
    setTodo("");
  };

  const toggleCompletedState = (e, todoID) => {
    setTodos((prevTodos) =>
      prevTodos.map((todoInfo) =>
        todoInfo.id === todoID
          ? { ...todoInfo, isCompleted: e.target.checked }
          : todoInfo
      )
    );
  };
  return (
    <div className="solution">
      <h2>problem: C1S3QS</h2>
      <p>
        Ques: Add Todos on click of submit button. On clicking any of the todos,
        it has to be marked. i.e &gt; completed todos become incomplete and vice
        versa.{" "}
      </p>
      <form onSubmit={addNewTodo}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          name="todo"
          id="todo"
          value={todo}
          placeholder="add new todo"
          required
        />
        <button>add</button>
      </form>
      <div>
        {todos.map((todoInfo) => {
          const { id, task, isCompleted } = todoInfo;
          return (
            <div key={id}>
              <label htmlFor={id + task}>
                <input
                  onChange={(e) => toggleCompletedState(e, id)}
                  type="checkbox"
                  name="task-state"
                  id={id + task}
                  checked={isCompleted}
                />
                <span
                  style={{
                    textDecoration: isCompleted ? "line-through" : "none"
                  }}
                >
                  {task}
                </span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
