const mongoose = require('mongoose');
const { Schema } = mongoose;

const Posts = new Schema({
    headline: String,
    admin: String,
    img: String,
    text: String,
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Posts', Posts);