import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, currency) {
        this._amount = 0;
        this._currency = new Currency('', '');

        this.amount = amount;
        this.currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(newAmount) {
        if (typeof newAmount !== 'number' || isNaN(newAmount)) {
            throw new TypeError('Amount must be a number');
        }
        this._amount = newAmount;
    }

    get currency() {
        return this._currency;
    }

    set currency(newCurrency) {
        if (!(newCurrency instanceof Currency)) {
            throw new TypeError('Currency must be an instance of Currency');
        }
        this._currency = newCurrency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || isNaN(amount) || typeof conversionRate !== 'number' || isNaN(conversionRate)) {
            throw new TypeError('Amount and conversionRate must be numbers');
        }
        return amount * conversionRate;
    }
}
