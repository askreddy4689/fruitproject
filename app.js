//jshint esversion:6

const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/test");
mongoose.connection.once("open",function(){
  console.log("connection has made");
}).on("error",function(error){
  console.log("error is",error);
});
