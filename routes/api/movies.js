//pull in the router portion of express and the movies controller
const router = require("express").Router();
const moviesController = require("../../controllers/moviesController");


//All routes are based off of the /api/movies route in index.js 

//Route gets all movies and returns them to the client.
router.route("/").get(moviesController.findAll);

//Route creates a new movie
router.route("/create").post(moviesController.createMovie);

//Route updates / deletes a Movie
router.route("/movie/:id")
.get(moviesController.findOne)
.put(moviesController.updateMovie)
.delete(moviesController.deleteMovie);


//export the router for use by express
module.exports = router;