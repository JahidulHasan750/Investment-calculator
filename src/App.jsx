import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result";


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 10000,
    expectedReturn: 6,
    duration: 12,
  });
  const inputIsValid = userInput.duration>=1;
  function handleInput(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
 
  return (
    <>
    <Header></Header>
    <UserInput userInput={userInput} onChange={handleInput}></UserInput>
    {!inputIsValid && <p className="center">Plese enter a duration greater than Zero</p>}
    {inputIsValid && <Result userInput={userInput}></Result>}
    </>
  )
}

export default App
