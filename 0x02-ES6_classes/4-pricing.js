import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      throw new TypeError(
        'amount must be a number',
      );
    }
    this._amount = amount;
    if (!(currency instanceof Currency)) {
      throw new TypeError(
        'currency must be a Currency obj',
      );
    }
    this._currency = currency;
  }

  set amount(newvalue) {
    if (typeof (newvalue) === 'number') {
      this._amount = newvalue;
    } else {
      throw new TypeError(
        'amount must be a number',
      );
    }
  }

  set currency(newvalue) {
    if (newvalue instanceof Currency) {
      this._currency = newvalue;
    } else {
      throw new TypeError(
        'currency must be a Currency obj',
      );
    }
  }

  get amount() { return this._amount; }

  get currency() { return this._currency; }

  displayFullPrice() {
    return `${this.amount} ${this.currency
      .name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number') {
      throw new TypeError(
        'amount must be a number',
      );
    }
    if (typeof (conversionRate) !== 'number') {
      throw new TypeError(
        'conversionRate must be a number',
      );
    }
    return conversionRate * amount;
  }
}
export default Pricing;

