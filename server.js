const express = require("express");
const app = express();
app.listen(3000, () =>
    console.log("Server is listening on port 3000. Ready to accept requests!"));

    // req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
// app.get("/", function (req, res) {
//     res.send("Hello World!");
// });
// app.get("/", function(req, res) {
// console.log(req);
// });
app.get("/", function(req, res) {
    res.send("Yay Node Girls!");
  });