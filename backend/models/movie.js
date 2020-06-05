const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: [true, "Bu alan zorunlu."],
        minlength: [3, "En az 3 karakterden oluştan bir başlık girin."],
        unique: true
    },
    year: {
        type: String,
        required: [true, "Bu alan zorunlu."]
    },
    duration: {
        type: Number,
        required: [true, "Bu alan zorunlu."]
    },
    poster: {
        type: String,
        required: [true, "Bu alan zorunlu."]
    },
    desc: {
        type: String,
        required: [true, "Bu alan zorunlu."],
        minlength: [15, "En az 15 karakterden oluştan bir açıklama girin."]
    },
    fragman_url: {
        type: String
    },
    video_url: {
        type: String,
        required: [true, "Bu alan zorunlu."]
    },
    director: {
        type: String,
        required: [true, "Bu alan zorunlu."]
    },
    actor: {
        type: String,
        required: [true, "Bu alan zorunlu."]
    },
    category: {
        type: String,
        required: [true, "Bu alan zorunlu."]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Movie", MovieSchema);