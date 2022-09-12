const { Address } = require("../scr/Entities/Address");
const { AddressValidator } = require("../scr/Entities/Validators/AddressValidator");
const { constants } = require("../scr/Entities/Constants");

const address = new Address({
    addressLine: null,
    adressLine2:
      '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
    addresType: '1',
    city: '11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
    postalCode: '1111111111',
    state: null,
    country: 'Africa',
  })

  describe('Validate address', () => {
    it('addressLine is empty', () => {
        let addressValidator = new AddressValidator();
        expect(addressValidator.Validate(address)).toContain(
        constants.addressLineIsEmptyError,
        )
    })
    it('addressLine2 is too long', () => {
        let addressValidator = new AddressValidator();
        expect(addressValidator.Validate(address)).toContain(
        constants.addressLine2LongError,
        )
    })
    it('address type is wrong', () => {
        let addressValidator = new AddressValidator();
        expect(addressValidator.Validate(address)).toContain(
        constants.addressTypeWrongTypeError,
        )
    })
    it('city is too long', () => {
        let addressValidator = new AddressValidator();
        expect(addressValidator.Validate(address)).toContain(
        constants.cityLongError,
        )
    })
    it('postal code is too long', () => {
        let addressValidator = new AddressValidator();
        expect(addressValidator.Validate(address)).toContain(
        constants.postalCodeLengthError,
        )
    })
    it('state is empty', () => {
        let addressValidator = new AddressValidator();
        expect(addressValidator.Validate(address)).toContain(
        constants.stateIsEmptyError,
        )
    })
    it('country is wrong', () => {
        let addressValidator = new AddressValidator();
        expect(addressValidator.Validate(address)).toContain(
        constants.countryNameError,
        )
    })
  })