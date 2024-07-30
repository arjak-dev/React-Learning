import { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C"];
function App() {
  const [array, setArray] = useState(INITIAL_VALUE);
  const [value, setValue] = useState("");
  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }

  function removeSpecificElement(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  }

  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(INITIAL_VALUE);
  }
  function updateAllAtoH() {
    setArray((currentArray) =>
      currentArray.map((element) => {
        if (element === "A") return "H";
        return element;
      })
    );
  }
  function addLetterToIndex(letter, index) {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ];
    });
  }
  return (
    <>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeSpecificElement("B")}>Remove All B's</button>
      <br />
      <button onClick={() => addLetterToStart("A")}>Add letter to Start</button>
      <br />
      <button onClick={() => addLetterToEnd("Z")}>Add letter to End</button>
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={updateAllAtoH}>Update All A to H</button>
      <br />
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => addLetterToStart(value)}>
        Add letter to the array
      </button>
      <br />
      <button onClick={() => addLetterToIndex("k", 2)}>
        Add Letter to Index
      </button>
      <br />
      {array.join(", ")}
    </>
  );
}

export default App;
