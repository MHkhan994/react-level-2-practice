import React, { useState } from "react";
import "./App.css";

function App() {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  const [userData, setUserData] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  console.log(userData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [inputName]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center h-screen flex-col gap-3"
    >
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
        id="name"
        className="bg-blue-50 p-3 text-2xl w-80"
      />

      <input
        type="email "
        placeholder="email"
        // value={userData.email}
        onChange={handleChange}
        name="email"
        id="email"
        className="bg-blue-50 p-3 text-2xl w-80"
      />
      <button className="text-2xl bg-green-300 p-3 rounded-md">submit</button>
    </form>
  );
}

export default App;
