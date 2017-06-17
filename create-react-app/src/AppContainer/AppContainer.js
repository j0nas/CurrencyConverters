import React, {Component} from "react";
import App from "./App/App";

class AppContainer extends Component {
  constructor() {
    super();

    this.state = {
      exchangeAmount: 0,
      currentRate: 0,
      convertedExchangeAmount: 0,
      currencyInfo: {},
    };

    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(event) {
    this.setState({[event.target.name]: event.target.value}, () =>
      this.setState({convertedExchangeAmount: (this.state.exchangeAmount * this.state.currentRate).toFixed(2)}));
  }

  componentWillMount() {
    fetch("http://api.fixer.io/latest")
      .then(res => res.json())
      .then(res => this.setState({currencyInfo: res}));
  }

  render() {
    return <App
      exchangeAmount={this.state.exchangeAmount}
      currentRate={this.state.currentRate}
      convertedExchangeAmount={this.state.convertedExchangeAmount}

      currencyInfo={this.state.currencyInfo}
      onInputChange={this.changeInput}
    />;
  }
}

export default AppContainer;