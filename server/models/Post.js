const mongoose = require('mongoose');

// Schéma postu
const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    popis: {
        type: String,
        max: 500
    },
    img: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    },
},
    {timestamps: true}
);

module.exports = mongoose.model('Post', PostSchema);