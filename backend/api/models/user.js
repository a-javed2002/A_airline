const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://user123:123@cluster0.hjjg8dd.mongodb.net/Stream", { useNewUrlParser: true });
// mongoose.connect("mongodb://localhost:27017/User", { useNewUrlParser: true });
// mongoose.connect('mongodb+srv://meanproject:<password>@clustermean.puxhx.mongodb.net/meanDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});
var conn = mongoose.Collection;

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

var userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
