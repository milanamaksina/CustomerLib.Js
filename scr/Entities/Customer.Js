const {Person} = require("./Person");

module.exports.Customer = class Customer extends Person{
    constructor(firstName, lastName, addresses, phone, email, notes, totalPurchasesAmount, lastPurchaseDate){
        super(firstName, lastName);
        this.addresses = addresses;
        this.phone = phone; 
        this.email = email;
        this.notes = notes;
        this.totalPurchasesAmount = totalPurchasesAmount;
        this.lastPurchaseDate = lastPurchaseDate;
    }
}