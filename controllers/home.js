var homeController = {};

homeController.index = function (req, res) {
    console.log("index route");
    res.status(200).send("O.K.");
}

module.exports = homeController;