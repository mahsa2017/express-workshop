const express = require("express");
const app = express();
const formidable = require("express-formidable");
const fs = require("fs");
const serverport= process.env.PORT || 3000;

app.listen(serverport, () =>
  console.log(`Server is listening on port ${serverport}. Ready to accept requests!`));
// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
// app.get("/", function (req, res) {
//     res.send("Hello World!");
// });
 app.use(express.static("public"));
 app.use(formidable());
 var blogposts;
 //fs.appendFile("./data/posts.json", parsedFile, function(error) {
  //if (error) throw error;
 // console.log('The file has been saved!');
//});

//show/get the recent posts
fs.readFile(__dirname + "/data/posts.json", function(error, file) {
  //console.log(file.toString());
  blogposts = JSON.parse(file); //json convert to array so then we can add and treat like an array rather than concat/append
});
app.get("/get-posts", function(req, res) {
  res.send(blogposts);
  //console.log(req);
});
//create/send new post
app.post("/create-post", function (req, res) {
  // console.log('I am /create-post endpoint');
  //console.log(req.fields);// contains non-file fields 
 
fs.readFile(__dirname + "/data/posts.json", function(error, file) {
  //console.log(file.toString());
  blogposts = JSON.parse(file); //array
  const blogpost = req.fields;
  //console.log(blogposts,"blogpostssssssss")
  blogposts.push(blogpost);
  fs.writeFile(__dirname + "/data/posts.json",JSON.stringify(blogposts),function(err){
      });
});
res.send(req.fields);
});

// //how to read from a file and write to a new or another existing file
// fs.readFile("readme.txt",'utf8',function(err,data){
//    fs.writeFile('writeme.txt',data,function(err){
//    });
//   console.log(data,"for test");
// });
 