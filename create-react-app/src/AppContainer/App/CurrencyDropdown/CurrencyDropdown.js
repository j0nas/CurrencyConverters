import React, {PureComponent} from "react";
import {v4} from "uuid";
import "./CurrencyDropdown.css"

class CurrencyDropdown extends PureComponent {
    render() {
        const {currentRate, onChange, rates} = this.props;

        return (
            <select name="currentRate" value={currentRate} onChange={onChange}>
                {rates && Object.keys(rates).map(exchangeRate =>
                    <option value={exchangeRate} key={v4()}>{exchangeRate}</option>)}
            </select>
        )
    }
}

export default CurrencyDropdown;