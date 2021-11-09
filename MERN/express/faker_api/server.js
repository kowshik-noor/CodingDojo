const express = require("express")
const app = express()
const port = 8000

const faker = require("faker")

class User {
    constructor() {
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    const usr = new User()
    res.json(usr)
})

app.get("/api/companies/new", (req, res) => {
    const cmpny = new Company()
    res.json(cmpny)
})

app.get("/api/user/company", (req, res) => {
    const cmpny = new Company()
    const usr = new User()
    res.json([usr, cmpny])
})


app.listen(port, () => console.log(`Listening on port ${port}`))