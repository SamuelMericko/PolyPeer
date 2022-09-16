const mongoose = require('mongoose');

// Schéma používateľa
const UserSchema = new mongoose.Schema({
    meno: {
        type: String,
        require: true,
        min: 3,
        max: 30,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    heslo: {
        type: String,
        required: true,
        min: 6
    },
    profilovka: {
        type: String,
        default: ''
    },
    cover: {
        type: String,
        default: ''
    },
    followery: {
        type: Array,
        default: []
    },
    followy: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},{timestamps: true});

module.exports = mongoose.model('Používatel', UserSchema);