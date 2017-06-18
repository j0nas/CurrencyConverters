import React from "react";
import "./App.css";
import CurrencyDropdown from "./CurrencyDropdown/CurrencyDropdown";
import CurrencyInput from "./CurrencyInput/CurrencyInput";

const App = ({
                 fromExchangeAmount,
                 fromExchangeRate,
                 toExchangeAmount,
                 toExchangeRate,
                 rates,
                 fromChange,
                 toChange,
                 fromRateChange,
                 toRateChange,
             }) =>
    <div className="App">
        <p className="App-intro">
            <CurrencyInput value={fromExchangeAmount} onChange={fromChange} autoFocus />
            <CurrencyDropdown currentRate={fromExchangeRate} onChange={fromRateChange} rates={rates}/>
            <br/>

            <CurrencyInput value={toExchangeAmount} onChange={toChange} />
            <CurrencyDropdown currentRate={toExchangeRate} onChange={toRateChange} rates={rates}/>
        </p>
    </div>;

export default App;
