const express = require('express')
const app = express()


app.get('/',function(req,res){
	res.send('hello,express')
})



var wechat = require('wechat');
var config = {
	token:'sjl943873',
	appid:'wxeab84a7432186503',
	encodingAESKey:'8PyrtKcogDHfqQdm0CXOdkP0JzLPWD3oqTRj0L3BwEM',
	checkSignature:true
};
app.use(express.query());
app.use('/wechat',wechat(config,function(req,res,next){
	//微信输入信息都在req.weixin上
	var message = req.weixin;

	console.log(message);

	if(message.MsgType === 'text')
	{
		res.reply('这是一个自动回复');
	}
	else if(message.MsgType === 'voice')
	{

	}
	else if(message.MsgType === 'image')
	{
		res.reply([
			{
				title:'文章提示',
				description:'返回的是文章',
				picurl:'http://pic002.cnblogs.com/images/2011/159097/2011102917303125.jpg',
				url:'http://doxmate.cool/node-webot/wechat/api.html'
			}	
			]);
	}
	

}));



app.listen(80)