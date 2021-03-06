//pull in express to run the backend w/ node
const express = require("express");

//body parser
const bodyParser = require("body-parser");

//pull in package for creating MongoDB models
const mongoose = require("mongoose");

//pull in the index file and all route files within to separate routes from the server file
const routes = require("./routes");

//Initialize an instance of the express app
const app = express();
const PORT = process.env.PORT || 3001;

//Set up middleware for express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set location of static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};


//set up routes in the express instance
app.use(routes);

//mongoose.connect(
//    process.env.MONGODB_URI || "mongodb://localhost/moviesDB"
//    );

//Start the Server
app.listen(PORT, function() {
    console.log(`API server listening on PORT ${PORT}`);
});