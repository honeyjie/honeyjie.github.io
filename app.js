var express = require("express");
var ejs = require("ejs");
var bodyParser = require('body-parser');

var app = express();

app.engine(".html", ejs.__express);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var json1 = {"Lime":"I love you","Xiong":"beauty"}
app.get("/", function(req, res) {//第一步用get得到index.html
	res.render("index");
});
app.get("/article1", function(req, res) {//第一步用get得到index.html
	res.render("article1");
});
app.get("/comment_content",function(req, res){
	res.send(req.query);
	console.log(req.query);
});
app.post("/comment_content",function(req, res){
	res.send(req.body);
	//console.log(req.query);
});

app.get("/conten", function(req, res) {
	name = req.args.get("name","");
	content = req.args.get("content","");
	req.send(req.body);
});

app.post("/content", function(req, res) {
	//console.log(req.body);
	res.send(req.body);
});
app.get("/blog",function(){
	res.render("first");
})
//resum
app.get("/resum",function(req,res){
	res.render("resum");
})
app.get("/product",function(req,res){
	res.render("product");
})
app.get("/game1",function(req,res){
	res.render("game1");
})
app.get("/webappphoto",function(req,res){
	res.render("webappphoto");
})
app.get("/webappphotolist",function(req,res){
	res.render("webappphotolist");
})
app.get("/blogcss",function(req,res){
	res.render("blogcss");
})
app.get("/scrolljs",function(req,res){
	res.render("scrolljs");
})
app.get("/jd_nav",function(req,res){
	res.render("jd_nav");
})
app.get("/mooc1",function(req,res){
	res.render("mooc1")
})
app.get("/mooc1list",function(req,res){
	res.render("mooc1list");
})
app.get("/mooc1detail",function(req,res){
	res.render("mooc1detail");
})
app.get("/band_article",function(req,res){
	res.render("band_article");
})
app.get("/morelarge",function(req,res){
	res.render("morelarge");
})
app.listen(3000);//127.0.0.1:3000
