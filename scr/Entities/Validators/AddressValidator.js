const { constants } = require("../Constants");

module.exports.AddressValidator = class AddressValidator {
    constructor() {}
    Validate(address) {
        let result = [];
        
        if (!address) return result;

        if (!address.addressLine || address.addressLine.length == 0) {
            result.push(constants.addressLineIsEmptyError);
        }
        else if (address.addressLine.length > 100) {
            result.push(constants.addressLineLongError);
        }
        if (address.addressLine2?.length > 100) {
            result.push(constants.addressLine2LongError);
        }
        if (!(address.addressType === "Shipping" || address.addressType === "Billing")) {
            result.push(constants.addressTypeWrongTypeError);
        }
        if (!address.city || address.city.length == 0) {
            result.push(constants.cityIsEmptyError);
        } else if (address.city.length > 50) {
            result.push(constants.cityLongError);
        }
        if (!address.postalCode || address.postalCode.length == 0) {
            result.push(constants.postalCodeIsEmptyError);
        } else if (address.postalCode.length > 6) {
            result.push(constants.postalCodeLengthError);
        }
      
        if (!address.state || address.state.length == 0) {
            result.push(constants.stateIsEmptyError);
        } else if (address.state.length > 20) {
            result.push(constants.stateLongError);
        }
      
        if (!address.country || address.country.length == 0) {
            result.push(constants.countryIsEmptyError);
        } else if (!(address.country === "United States" || address.country === "Canada")) {
            result.push(constants.countryNameError);
        }
        
        return result;
    }
};