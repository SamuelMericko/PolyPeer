const mongoose = require('mongoose');

// Schéma používateľa
const UserSchema = new mongoose.Schema({
    meno: {
        type: String,
        require: true,
        min: 3,
        max: 30,
    },
    priezvisko: {
        type: String,
        require: true,
        min: 3,
        max: 30
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
    sledovatelia: {
        type: Array,
        default: []
    },
    sledovane: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isZiak: {
        type: Boolean,
        default: true
    },
    isZamestnanec: {
        type: Boolean,
        default: false
    },
    popis: {
        type: String,
        max: 50
    },
    mesto: {
        type: String,
        max: 50
    },
    skola: {
        type: String,
        max: 50
    },
    trieda: {
        type: String,
        max: 7
    }
},{timestamps: true});

module.exports = mongoose.model('Používatel', UserSchema);