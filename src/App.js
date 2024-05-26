import "./App.css";
import React, { useState } from "react";

function App() {
  //making state of our application

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  //Logic
  let calcBmi = (e) => {
    e.preventDefault();

    //let height = height/100;

    if(height ===0 || weight ===0){
      alert('Please enter valid height and weight');
    }

    else{
      let bmi = weight/((height/100)*(height/100));
      setBmi(bmi.toFixed(1));


      if(bmi < 25){
        setMessage('You are UnderWeight');
      }
      else if(bmi >=25 && bmi <30){
      setMessage('You are Healthy');
      }
      else{
        setMessage('You are OverWeight');
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <div className="container">
        <h2 class="hedding">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="text"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (cm)</label>
            <input
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>

          <div>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>The BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
