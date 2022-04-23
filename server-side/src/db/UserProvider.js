const { randomUUID } = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

    async findHashByEmail(email) {
        const hash = await connection("users").where({ email: email }).select("password");

        if (hash.length > 0) {
            return hash[0].password;
        } else {
            return false;
        }
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
                return true;
            }).catch((err) => {
                return false;
            })
        });
    }

    async login(data) {
        const isEmailValid = await this.findByEmail(data.email);

        if (isEmailValid === false) {
            return false;
        }

        const hash = await this.findHashByEmail(data.email);  
        const match = await bcrypt.compare(data.password, hash);

        if (match) {

            const user = await connection("users").where({ email: data.email }).select("id", "name", "tag", "bio", "avatar");
            const token = await jwt.sign({ data }, 'secret', { expiresIn: '1h' });
            
            return { user: user[0], token }
        
        } else {
            return false;
        }
    }
}

module.exports = { UserProvider };
