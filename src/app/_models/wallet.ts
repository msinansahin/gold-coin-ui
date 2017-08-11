export class Wallet {
    id:             number;
    currentBalance: number;
    currency:       string;
    address:        string;

    constructor (address: string, currency: string, currentBalance: number) {
        this.address = address;
        this.currency = currency;
        this.currentBalance = currentBalance;
    }
}
