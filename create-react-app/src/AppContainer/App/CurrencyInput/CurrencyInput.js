import React, {PureComponent} from "react";
import "./CurrencyInput.css";

class CurrencyInput extends PureComponent {
    render() {
        return <input type="number" {...this.props} />
    }
}

export default CurrencyInput;