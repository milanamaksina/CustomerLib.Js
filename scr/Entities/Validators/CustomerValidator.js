module.exports.CustomerValidator = class CustomerValidator {
    constructor() {}
    Validate(customer) {
        let result = [];
        const emailRegex = '/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i';
        const phoneRegex = '^\+?[1-9]\d{1,14}$';
        const lowestDate = Date.UTC(2020, 1, 1);

        if (!customer) return result;

        if (customer.firstName.length > 50) {
            result.push('first name cant have more than 50 letters');
        }
        if(customer.lastName == null){
            result.push('last name cant be null');
        }
        else if(customer.lastName.length > 50){
            result.push('last name cant have more than 50 letters')
        }
        if (!customer.addresses) {
            results.push(`Should be at least one address`)
        }
        else if(customer.addresses.length == 0){
            result.push('address list cant be null');
        }
        if(!customer.phone.match(phoneRegex)){
            result.push('invalid phone number')
        }
        if(!customer.email.match(emailRegex)){
            result.push('invalid email')
        }
        if(customer.notes == null){
            result.push('notes should have at list one note')
        }
        if(customer.lastPurchaseDate < lowestDate){
            result.push('date cannot be lower than 2020-1-1')
        }
        return result;
    }
};