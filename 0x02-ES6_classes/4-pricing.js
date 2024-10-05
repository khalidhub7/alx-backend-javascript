export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(value) {
    if (typeof (value) === 'number') {
      this._amount = Number(value);
    }
  }

  set currency(value) {
    if (typeof (value) === 'object') {
      this._currency = (value);
    }
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount) * (conversionRate);
  }
}
