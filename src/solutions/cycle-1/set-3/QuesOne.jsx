import { useState } from "react";

export const QuesOne = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setMessage(`${name.length % 2 === 0 ? "Hi" : "Hello"} ${name}`);
  };
  return (
    <div className="solution">
      <h2>problem: C1S3Q1</h2>
      <p>
        Take the name from user input and display the appropriate message when
        clicked on "show welcome message" If the name is an odd number of
        characters display "Hello [name] and if it's even then display "Hi
        [name]"
      </p>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Enter your name"
          required
        />
        <button>show welcome message</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
