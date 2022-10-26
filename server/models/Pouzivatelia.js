const mongoose = require('mongoose');

// Schéma používateľa
const UserSchema = new mongoose.Schema({
    meno: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
      },
      heslo: {
        type: String,
        required: true,
        min: 6,
      },
      profilovka: {
        type: String,
        default: "",
      },
      coverPicture: {
        type: String,
        default: "",
      },
      followers: {
        type: Array,
        default: [],
      },
      followings: {
        type: Array,
        default: [],
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
      popis: {
        type: String,
        max: 50,
      },
      mesto: {
        type: String,
        max: 50,
      },
      krajina: {
        type: String,
        max: 50,
      },
      skola: {
        type: Number,
        enum: [1, 2, 3],
      },
},{timestamps: true});

module.exports = mongoose.model('User', UserSchema);