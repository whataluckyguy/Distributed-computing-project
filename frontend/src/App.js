import React from "react";
import "./App.css";

function App() {
  const [problem, setProblem] = React.useState("Sum");

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  const renderOutput = (problem) => {
    if (problem === "Sum") {
      let num1 = generateRandomNumber();
      let num2 = generateRandomNumber();

      return (
        <div>
          Sum of {num1} and {num2} is {num1 + num2}.
        </div>
      );
    }
    if (problem === "Product") {
      let num1 = generateRandomNumber();
      let num2 = generateRandomNumber();

      return (
        <div>
          Product of {num1} and {num2} is {num1 * num2}.
        </div>
      );
    } else {
      let num1 = generateRandomNumber();
      let num2 = generateRandomNumber();

      return (
        <div>
          Modulus of {num1} and {num2} is {num1 % num2}.
        </div>
      );
    }
  };

  return (
    <div className="App">
      <div className="problems">
        <h1>Problems</h1>{" "}
        <div className="note">Default selected problem is problem 1 (easy)</div>
        <select
          value={problem}
          onChange={(e) => {
            setProblem(e.target.value);
          }}
        >
          <option value={"Sum"}>Sum of two random numbers</option>
          <option value={"Product"}>Product of two random numbers</option>
          <option value={"Modulus"}>Modulus of two random numbers</option>
        </select>
      </div>
      <hr />
      <div className="outputContainer">
        <h1>Output</h1>
        <div>
          Selected problem is <strong>{problem} of two random numbers.</strong>
        </div>
        <div className="output">{renderOutput(problem)}</div>
      </div>
    </div>
  );
}

export default App;
