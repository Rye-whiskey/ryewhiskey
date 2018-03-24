const express = require('express'), //express 框架 
const wechat  = require('./wechat/wechat'), 
const config = require('./config');//引入配置文件

var app = express();//实例express框架

var wechatAPP = new wechat(config); //实例wechat模块

//用于处理所有进入 3000 端口 get 的链接请求
app.get('/',function(req,res){
	wechatAPP.auth(req,res);
});
//post
app.post('/',function(req,res){
	wechatAPP.handleMsg(req,res);
});

//请求获取access_token
app.get('/getAccessToken',function(req,res){
	wechatAPP.getAccessToken().then(function(data){
		res.send(data);
	});
});

app.listen(3000);
