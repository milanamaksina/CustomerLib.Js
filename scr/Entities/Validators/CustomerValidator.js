const { constants } = require("../Constants");

module.exports.CustomerValidator = class CustomerValidator {
    constructor() {}
    Validate(customer) {
        let result = [];
        const emailRegex = '/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i';
        const phoneRegex = '^\+?[1-9]\d{1,14}$';
        const lowestDate = Date.UTC(2020, 1, 1);

        if (!customer) return result;

        if (customer.firstName.length > 50) {
            result.push(constants.firstNameLongError);
        }
        if(customer.lastName == null){
            result.push(constants.lastNameIsEmptyError);
        }
        else if(customer.lastName.length > 50){
            result.push(constants.lastNameLenghtError);
        }
        if(customer.addresses?.length == 0){
            result.push(constants.addressesListIsEmptyError);
        }
        if(!customer.phone?.match(phoneRegex)){
            result.push(constants.invalidPhoneNumderError);
        }
        if(!customer.email?.match(emailRegex)){
            result.push(constants.invalidEmailError);
        }
        if(customer.notes == null){
            result.push(constants.notesIsEmpty);
        }
        if(customer.lastPurchaseDate < lowestDate){
            result.push(constants.lastPurchaseDateIsLow);
        }
        return result;
    }
};