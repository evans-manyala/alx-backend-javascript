import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount with type checking
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError(`${value} must be a number`);
    }
    this._amount = value;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency with type checking (instance of Currency)
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${value} must be an instance of Currency`);
    }
    this._currency = value;
  }

  // Method to display full price in the format "amount currency_name (currency_code)"
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
