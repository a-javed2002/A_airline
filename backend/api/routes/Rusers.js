var express = require("express");
var userModel = require("../models/user");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    var userDetails = new userModel({
      name: "abd",
      email: "a@gmail.com",
      password: "123",
    });

    const savedUser = await userDetails.save();
    res.render("index", { title: "User Data Inserted" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error inserting user data");
  }
});

router.post("/register", function (req, res, next) {
  var userDetails = new userModel({
    name: req.body.Name,
    email: req.body.Email,
    password: req.body.Password,
  });

  userDetails
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "Inserted Successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;
