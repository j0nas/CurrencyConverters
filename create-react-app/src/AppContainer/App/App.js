import React from "react";
import {v4} from "uuid";
import logo from "../../logo.svg";
import "./App.css";

const App = ({exchangeAmount, currentRate, convertedExchangeAmount, onInputChange, currencyInfo}) =>
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      <input name="exchangeAmount" type="number" autoFocus={true} value={exchangeAmount} onChange={onInputChange}/>
      &nbsp;
      {currencyInfo.base}
      <br/>
      <input name="convertedExchangeAmount" type="number" value={convertedExchangeAmount}/>
      <select name="currentRate" value={currentRate} onChange={onInputChange}>
        <option value={0} disabled={true}>Select currency</option>
        {currencyInfo.rates && Object.keys(currencyInfo.rates).map(exchangeRate =>
          <option value={currencyInfo.rates[exchangeRate]} key={v4()}>{exchangeRate}</option>)}
      </select>
    </p>
  </div>;

export default App;
