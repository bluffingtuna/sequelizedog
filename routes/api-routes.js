//Requiring dog's model
var db = require("../models");
//Routes
module.exports = function(app) {
    //GET route for getting all of the posts
    app.get("/", function(req, res) {
        db.Dog.findAll({ include: [db.Owner] }).then(function(data) {
            
            res.render("index", { dogs: data });
        });
    });

    app.post("/", function(req, res) {
        db.Dog.create({
            name: req.body.name,
            breed: req.body.breed
        }).then(function(data) {
            res.redirect("/");
        });
    });

    app.put("/:name", function(req, res) {
        db.Owner.create({
            name: req.body.owner
        }).then(function(data) {
            db.Dog.update({
                adopted: true,
                OwnerId: data.id
            }, {
                where: {
                    name: req.params.name
                }
            })
            res.redirect("/");
        });
    })
};
