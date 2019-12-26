// 引入服务器
const express = require("express");
// 引入中间件
const bodyParser = require("body-parser");
// 引入mysql数据库
const mysql = require("mysql");
// 引入同源策略
// const cors = require("cors");
// 引入session
const session = require("express-session");

// 连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  port:3306,
  user:"hongzhihao",
  password:"s19941211",
  database:"my_pets",
  connectionLimit:15
})

// 启动服务
var app = express();

// 端口5050
app.listen(5050);

// 挂载静态资源
app.use(express.static("./public"));


// 接口API
app.get("/task",(req,res)=>{
  res.send({message:"666"})
});
