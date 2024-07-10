import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(() => {
    return 0;
  });
  //  state with two internal variables
  const [person, setPerson] = useState({ name: "Arjak", age: "25" });

  // Function to update the counter on click.
  function counterUpdate() {
    setCounter((currentCounter) => {
      return currentCounter + 1;
    });
  }

  // If we dont update all the values in the state then the values will be set
  // to null by default. To over come this limitation we have to use the below funciton.
  function UpdatePerson() {
    setPerson({ name: "Mondal", age: "25" });
  }

  // ...currentPerson return all the values from the current person. And updates the name.
  function UpdateRetentionPerson() {
    setPerson((currentPerson) => {
      return { ...currentPerson, name: "Mondal" };
    });
  }
  // You can do either of the two,
  // return <h1 onClick={() => setCounter((currentCounter) => currentCounter + 1)}>{counter}</h1>;
  return (
    <div>
      <h1 onClick={counterUpdate}>{counter}</h1>
      <h1 onClick={UpdateRetentionPerson}>
        {person.name} {person.age}
      </h1>
    </div>
  );
}
