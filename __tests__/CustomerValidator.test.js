const { Customer } = require("../scr/Entities/Customer");
const { Address } = require("../scr/Entities/Address");
const { CustomerValidator } = require("../scr/Entities/Validators/CustomerValidator");

const customer = new Customer(
    "",
    "",
    [address],
    "+79111111111",
    "123@mail.com",
    [""],
    null,
    Date.UTC(2020,12,31)
);

test("Should be able to return error messages if Customer is empty", () => {
    const customerValidator = new CustomerValidator();
    const results = customerValidator.Validate(customer);

    const customer = new Customer(
        "",
        "",
        [],
        "+79111111111",
        "123@mail.com",
        [],
        null,
        Date.UTC(2020,12,31)
    );

    expect(results[0]).toBe("last name cant be null");
    expect(results[1]).toBe("Should be at least one address");
});
  