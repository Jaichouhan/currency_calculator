import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [value, setValue] = useState("");
  const [amount, setAmount] = useState("");

  const submitPriceHandler = () => {
    if (!value) {
      alert("please enter amount");
    } else {
      axios
        .get("http://www.floatrates.com/daily/usd.json")
        .then((res) => {
          const totalAmount = value * res?.data?.eur?.rate;
          setAmount(totalAmount.toFixed(2));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <input
              type="number"
              placeholder="please enter a amount usd"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </div>
          <div className="col-md-12 mt-3 mb-3">
            <button type="submit" onClick={submitPriceHandler}>
              Show Price
            </button>
          </div>

          <div className="col-md-6 mt3">Total Amount of Euro - {amount}</div>
        </div>
      </div>
    </>
  );
};

export default App;
