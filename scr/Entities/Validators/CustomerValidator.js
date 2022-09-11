module.exports.CustomerValidator = class CustomerValidator {
    constructor() {}
    Validate(customer) {
        const result = [];
        const emailRegex = '/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i';
        const phoneRegex = '^\+?[1-9]\d{1,14}$';
        const lowestDate = '2020-1-1';

        if (!customer) return [];

        if (customer.firstName.length > 50 || customer.lastName.length > 50) {
            result.push('Cant be more than 50 letters');
        }
        if(customer.lastName == null || customer.lastName.length == 0){
            result.push('last name cant be null');
        }
        if(customer.addresses.length == 0){
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
        if(customer.lastPurchaseDate.toISOString().slice(0, 10) < lowestDate.toISOString().slice(0, 10)){
            result.push('date cannot be lower than 2020-1-1')
        }
    }
};