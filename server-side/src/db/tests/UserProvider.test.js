class UserProvider {

    emailIsValid(email) {

        var returned = null;

        const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; 

        email !== '' && email.match(regex) ? returned = true : returned = false;

        return returned;
    }

}

const provider = new UserProvider();

describe("Email testing", () => {

    test("Should be return false", () => {
        expect(provider.emailIsValid("testing@.com")).toBeFalsy();
        expect(provider.emailIsValid("testing@com")).toBeFalsy();
        expect(provider.emailIsValid("test<>@mail.com")).toBeFalsy();
        expect(provider.emailIsValid("")).toBeFalsy();
    });

    test("Should be return true", () => {
        expect(provider.emailIsValid("test@m.com")).toBeTruthy();
        expect(provider.emailIsValid("testin11@123.com")).toBeTruthy();
    });

});

