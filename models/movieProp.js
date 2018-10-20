const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//set up Movie Schema
const movie = new Schema({
    movieName: {
        type: String,
        required: true
    },
    movieType: {
        type: String,
    },
    summary: {
        type: String
    },
    yearMade: {
        type: Number
    }
});

const movieProp = mongoose.model("movieProp", movie);

module.exports = movieProp;