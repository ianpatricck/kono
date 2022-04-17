const { randomUUID } = require("crypto");
const bcrypt = require("bcrypt");
const connection = require("./config");

class UserProvider {
    async findByEmail(email) {
        const res = await connection("users").where({
            email: email
        }).select("email");

        if (res.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    emailIsValid(email) {

        var returned = null;

        const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; 

        email !== '' && email.match(regex) ? returned = true : returned = false;

        return returned;
    }

    create(data) {
        const { name, email, password } = data;

        const tagNumber = Date.now().toString();
        const tag = "@" + name.toLowerCase().trim()[0] + name.length + tagNumber.slice(tagNumber.length - 5);

        bcrypt.hash(password, 10, (err, hash) => {
            connection("users").insert({
                id: randomUUID(),
                name: name,
                tag: tag, 
                email: email,
                password: hash
            }).then(() => {
                console.log("User was created");
            }).catch((err) => {
                console.error(err);
            })
        });

    }
}

module.exports = { UserProvider };
