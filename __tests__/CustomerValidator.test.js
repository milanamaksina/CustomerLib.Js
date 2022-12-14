const { Customer } = require("../scr/Entities/Customer");
const { CustomerValidator } = require("../scr/Entities/Validators/CustomerValidator");
const { constants } = require("../scr/Entities/Constants");

const customer = new Customer({
    firstName:
      '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
    lastName: "",
    addresses: [],
    phoneNumber: '+0',
    email: 'email',
    notes: [],
    totalPurchasesAmount: 0,
    lastPurchaseDate: new Date('2000-01-01'),
  })
  
  describe('Validate customer', () => {
    it('first name length is more than 50 letters', () => {
      let customerValidator = new CustomerValidator();
      expect(customerValidator.Validate(customer)).toContain(
        constants.firstNameLongError,
      )
    })
    it('last name is empty', () => {
        let customerValidator = new CustomerValidator();
        expect(customerValidator.Validate(customer)).toContain(
          constants.lastNameIsEmptyError,
        )
    })
    it('addresses list is empty', () => {
        let customerValidator = new CustomerValidator();
        expect(customerValidator.Validate(customer)).toContain(
        constants.addressesListIsEmptyError,
        )
    })
    it('invalid phone number', () => {
        let customerValidator = new CustomerValidator();
        expect(customerValidator.Validate(customer)).toContain(
        constants.invalidPhoneNumderError,
        )
    })
    it('invalid email', () => {
        let customerValidator = new CustomerValidator();
        expect(customerValidator.Validate(customer)).toContain(
        constants.invalidEmailError,
        )
    })
    it('notes list is empty', () => {
        let customerValidator = new CustomerValidator();
        expect(customerValidator.Validate(customer)).toContain(
        constants.notesIsEmptyError,
        )
    })
    it('last purchase date is low', () => {
        let customerValidator = new CustomerValidator();
        expect(customerValidator.Validate(customer)).toContain(
        constants.PurchaseDateIsLowError22,
        )
    })
  })
  