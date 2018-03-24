const express = require("express");
const app = express();
const formidable = require("express-formidable");
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
// app.get("/", function(req, res) {
//     res.send("Yay Node Girls!");
//   });
// app.get("/", function(req, res) {
//     res.send("Hello World!");
//   });
  
//   app.get("/chocolate", function(req, res) {
//     res.send("Mm chocolate :O");
//   });
//   app.get("/node", function(req, res) {
//     res.send("node is funny");
//   });
//   app.get("/girls", function(req, res) {
//     res.send("girls are pretty");
//   });
app.use(express.static("public"));

//app.use(formidable());

app.post("/create-post", function(req, res) {
  console.log('I am /create-post endpoint');
  
  console.log(req.fields);
  console.log(req.body);
});
app.use(formidable());