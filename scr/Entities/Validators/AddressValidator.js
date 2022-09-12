const { constants } = require("../Constants");

module.exports.AddressValidator = class AddressValidator {
    constructor() {}
    Validate(address) {
        let result = [];
        
        if (!address) return result;

        if (!address.addressLine || address.addressLine.length == 0) {
            result.push(constants.);
        }
        else if (address.addressLine.length > 100) {
            result.push(constants.);
        }
        if (!(address.addressType === "Shipping" || address.addressType === "Billing")) {
            result.push(constants.);
        }
        if (!address.city || address.city.length == 0) {
            result.push(constants.);
        } else if (address.city.length > 50) {
            result.push(constants.);
        }
        if (!address.postalCode || address.postalCode.length == 0) {
            result.push(constants.);
        } else if (address.postalCode.length > 6) {
            result.push(constants.);
        }
      
        if (!address.state || address.state.length == 0) {
            result.push(constants.);
        } else if (address.state.length > 20) {
            result.push(constants.);
        }
      
        if (!address.country || address.country.length == 0) {
            result.push(constants.);
        } else if (!(address.country === "United States" || address.country === "Canada")) {
            result.push(constants.);
        }
        
        return result;
    }
};