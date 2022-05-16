import React, { useState } from "react";
import "./App.css";

function App() {
  const [output, setOutput] = useState("");
  const [bob, setBob] = useState("");
  const [luck, setLuck] = useState("");

  const bobHandler = (e) => {
    setBob(e.target.value);
  };

  const luckHandler = (e) => {
    setLuck(e.target.value);
  };

  function calculateSum(bDate) {
    bDate = bDate.replaceAll("-", "");
    let ar = bDate.split("");
    let sum = 0;
    for (let char of ar) {
      sum += Number(char);
    }
    return sum;
  }

  function showMessage(sum, luckNo) {
    if (sum % Number(luckNo) === 0) {
      setOutput("You birthday is lucky 🎊😎");
    } else {
      setOutput("You birthday is not lucky 😢");
    }
  }

  const checkLuckyBirth = () => {
    let sum = calculateSum(bob);
    if (sum && Number(luck)) {
      showMessage(sum, luck);
    } else {
      setOutput("Enter both fields 😡");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Is you birthday lucky?? 🤔</h1>
        </header>
        <section>
          <div className="bob">
            <label htmlFor="birthDate">BirthDate:</label>
            <input
              type="date"
              id="birthDate"
              value={bob}
              onChange={bobHandler}
            />
          </div>
          <div className="luck">
            <label htmlFor="luckNo">lucky number:</label>
            <input
              type="number"
              id="luckNo"
              value={luck}
              onChange={luckHandler}
            />
          </div>
          <button id="btnCheck" onClick={checkLuckyBirth}>
            Check
          </button>
          <textarea
            name=""
            id="outputbox"
            cols="30"
            rows="3"
            value={output}
            disabled
          ></textarea>
        </section>
        <footer>&copy; | 2022 | All rights are reserved</footer>
      </div>
    </div>
  );
}

export default App;
