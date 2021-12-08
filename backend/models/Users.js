const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const Users = new Schema({
    email: String,
    username: String,
    password: String
}, {
    timestamps: true
}
);



module.exports.hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    } catch(error) {
        throw new Error('Ошибка: ', error)
    }
}

module.exports = mongoose.model('Users', Users);