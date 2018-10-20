const router = require("express").Router();
const movieRoutes = require("./movies");

    

//movie Routes set up here (in movieRoutes.js)
router.use("/movies", movieRoutes);



module.exports = router;
