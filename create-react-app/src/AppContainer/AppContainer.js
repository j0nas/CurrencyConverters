import React, {Component} from "react";
import money from "money";
import App from "./App/App";

class AppContainer extends Component {
    constructor() {
        super();

        this.state = {
            fromExchangeAmount: 0,
            toExchangeAmount: 0,

            fromExchangeRate: "USD",
            toExchangeRate: "NOK",

            currencyInfo: {},
        };

        this.changeFrom = this.changeFrom.bind(this);
        this.changeTo = this.changeTo.bind(this);

        this.changeFromCurrencyRate = this.changeFromCurrencyRate.bind(this);
        this.changeToCurrencyRate = this.changeToCurrencyRate.bind(this);
    }

    convert(amount, from, to) {
        return money.fx(amount).from(from).to(to).toFixed(2);
    }

    changeFrom(event) {
        this.setState({fromExchangeAmount: event.target.value}, () => {
            const {fromExchangeAmount, fromExchangeRate, toExchangeRate} = this.state;
            this.setState({toExchangeAmount: this.convert(fromExchangeAmount, fromExchangeRate, toExchangeRate)});
        });
    }

    changeTo(event) {
        this.setState({toExchangeAmount: event.target.value}, () => {
            const {toExchangeAmount, fromExchangeRate, toExchangeRate} = this.state;
            this.setState({fromExchangeAmount: this.convert(toExchangeAmount, toExchangeRate, fromExchangeRate)});
        });
    }

    changeFromCurrencyRate(event) {
        this.setState({fromExchangeRate: event.target.value}, () => {
            const {toExchangeAmount, fromExchangeRate, toExchangeRate} = this.state;
            this.setState({fromExchangeAmount: this.convert(toExchangeAmount, fromExchangeRate, toExchangeRate)});
        });
    }

    changeToCurrencyRate(event) {
        this.setState({toExchangeRate: event.target.value}, () => {
            const {fromExchangeAmount, fromExchangeRate, toExchangeRate} = this.state;
            this.setState({toExchangeAmount: this.convert(fromExchangeAmount, fromExchangeRate, toExchangeRate)});
        });
    }

    componentWillMount() {
        fetch("https://api.fixer.io/latest")
            .then(res => res.json())
            .then(res => {
                this.setState({rates: res.rates});
                money.rates = res.rates;
            });
    }

    render() {
        return (
            <App
                {...this.state}
                fromChange={this.changeFrom}
                toChange={this.changeTo}
                fromRateChange={this.changeFromCurrencyRate}
                toRateChange={this.changeToCurrencyRate}
            />
        );
    }
}

export default AppContainer;