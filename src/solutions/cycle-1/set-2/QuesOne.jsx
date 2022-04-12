import { useState } from "react";

export const data = [
  {
    id: 1,
    email: "tanay@neog.camp"
  },
  {
    id: 2,
    email: "tanvi@neog.camp"
  },
  {
    id: 3,
    email: "akanksha@neog.camp"
  },
  {
    id: 4,
    email: "parul@neog.camp"
  },
  {
    id: 5,
    email: "kishan@neog.camp"
  }
];

const isAlreadySubscribed = (email, subscribers) =>
  Boolean(
    subscribers.find((subscribersData) => subscribersData.email === email)
  );

export const QuesOne = () => {
  const [subscribers, setSubscribers] = useState(data);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const subscribeHandler = (e) => {
    e.preventDefault();
    const isSubscribed = isAlreadySubscribed(email, subscribers);
    if (isSubscribed) {
      showMessage("email already present in subscribers list!");
      return;
    }
    setSubscribers((prevSubscribers) =>
      prevSubscribers.concat({ id: prevSubscribers.length + 1, email })
    );
    showMessage("Successfully Subscribed");
    setEmail("");
  };

  return (
    <div className="solution">
      <h2>problem: C1S2Q1</h2>
      <p>
        Ques: Create a subscribe form with an email and subscribe button. On
        clicking subscribe, check if the email already exists in the given
        array. if it exists show a message that the email is already subscribed,
        else show that you are now subscribed.
      </p>
      <form onSubmit={subscribeHandler}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Enter email address"
          required
        />
        <button>subscribe</button>
      </form>
      <p>{message}</p>
    </div>
  );
};
