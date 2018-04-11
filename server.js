const express = require("express");
const app = express();
const formidable = require("express-formidable");
const fs = require("fs");
var route = require ('./routes');
const serverport = process.env.PORT || 3000;

/* app.set('view engine', 'ejs');
app.get('/contact', function (req, res) {
  res.send("Contact us: cyf@cyf.info")
})
app.get('/who/:name?', function (req, res) {
  if (req.params.name) {
    var name = req.params.name;
  } else {
    res.send('<h2>welcome dear guest</h2>');
  }
  res.send(`<h2>welcome dear ${name}</h2>`);
})
app.get('/who/:name?/:title', function (req, res) {
  var name = req.params.name;
  var title = req.params.title;
  res.send(`<p><h3>Name: ${name} <br> Title: ${title}</h3></p>`)
})
//how can i use * for wrong urls???
app.get('/error', function (req, res) {
  res.send(`<h1 style="text-align:center">404 Not Found <br> This is a message from Mah</h1>`)
})
// app.use(function (req,res){
//   var err= new Error('Not found');
//   err.status=404;
// })
//templating engines

app.locals.pagetitle="welcome pagelocals";

app.get('/temp',function(req,res){
  res.render('default',{
    title:"Node girls Templating eng",
    classname:'home',
    users:['ali','john','amir']
  });
})
app.get('/me',route.me);
app.get('/partials',route.partials);

//app.set('views',__dirname + '/partials'); */

app.get('/posts/:postId', function (req, res) {
  res.send('post id: ' + req.params.postId);
});

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
fs.readFile(__dirname + "/data/posts.json", function (error, file) {
  //console.log(file.toString());
  blogposts = JSON.parse(file); //json convert to array so then we can add and treat like an array rather than concat/append
});
app.get("/get-posts", function (req, res) {
  res.send(blogposts);
  //console.log(req);
});
//create/send new post
app.post("/create-post", function (req, res) {
  // console.log('I am /create-post endpoint');
  //console.log(req.fields);// contains non-file fields 

  fs.readFile(__dirname + "/data/posts.json", function (error, file) {
    //console.log(file.toString());
    blogposts = JSON.parse(file); //array
    const blogpost = req.fields;
    //console.log(blogposts,"blogpostssssssss")
    blogposts.push(blogpost);
    fs.writeFile(__dirname + "/data/posts.json", JSON.stringify(blogposts), function (err) {
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
