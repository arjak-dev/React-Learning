import { useState } from "react";

export function NameAge() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function incrementAge() {
    setAge((currentAge) => {
      return currentAge + 1;
    });
  }
  function decrementAge() {
    setAge((currentAge) => {
      return currentAge - 1;
    });
  }
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <br />
      <br />
      <button onClick={incrementAge}> + </button>
      {age}
      <button onClick={{ decrementAge }}> - </button>
      <p>
        My name is {name} and I am {age} years old.
      </p>
    </>
  );
}
