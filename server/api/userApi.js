var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var conn = mysql.createConnection(models.mysql);

conn.connect();


const errJson = {
	hasUser: {
		Num: '1',
		Msg: '已经存在该用户，请更换注册名。。。'
	},
	registSuccess: {
		Num: '2',
		Msg: '注册成功'
	},
	loginErr: {
		Num: '3',
		Msg: '用户名或密码错误'
	},
	loginSuccess: {
		Num: '4',
		Msg: '登录成功'
	}
}

var jsonWrite = function(res,ret){
	if(typeof ret === 'undefind'){
		res.json({
			code: '1',
			msg: '操作失败'
		});
	}else{
		res.json(ret);
	}
}

router.post('/login',(req,res)=>{	
	var params = req.body;
	var sqlHas = 'select * from user where username = "' + params.username+'" and password = "'+params.password+'"';
	conn.query(sqlHas,function(err,result){
		if(err){console.log(err);}
		console.log(result);
		if(result.length>0){
			jsonWrite(res, result.concat(errJson.loginSuccess));
		}else{
			jsonWrite(res, errJson.loginErr);
		}
	})
});

router.post('/regist',(req,res)=>{	
	var params = req.body;
	// var sqlHas = 'select count(*) from user where username = "' + params.username+'"';
	var sqlHas = 'select 1 from user where username = "' + params.username+'"';
	var sqlAdd = 'insert into user (username,password)values("'+params.username+'","'+params.password+'")';
	conn.query(sqlHas,function(err,result){
		if(err){console.log(err);}
		if(result.length>0){
			jsonWrite(res, errJson.hasUser);
		}else{
			conn.query(sqlAdd,function(err,results){
				if(err){console.log(err);}
				if(result){
					jsonWrite(res,errJson.registSuccess);
				}
			})
		}
	})
});

// 书架
router.post('/bookshelf',(req,res)=>{
	var userId = req.body.userId;
	var sql = 'select bookIdJson from user where Id= '+userId	
	conn.query(sql, function(err,result){
		if(err){
			console.log(err);
		}
		if(result){
			jsonWrite(res, result);
		}
	})
});

// 加入书架
router.post('/addShelf',(req,res)=>{
	var bookIdJson = req.body.bookJson;
	var userId = req.body.userId;
	var sql = 'update user set bookIdJson = "'+	bookIdJson + '" where Id = ' + userId;
	conn.query(sql, function(err,result){
		if(err){
			console.log(err);
		}
		if(result){
			jsonWrite(res, result);
		}
	})
}); 
 

module.exports = router;