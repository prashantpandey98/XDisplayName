import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setFullName(firstName + " " + lastName);
  };
  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={onSubmit}>
        <label name="firstName">First Name:</label>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
          id="firstName"
          className="firstName"
        ></input>
        <br />
        <label name="lastName">Last Name:</label>
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
          id="lastName"
          className="lastName"
        ></input>
        <br />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </>
  );
}

export default App;
