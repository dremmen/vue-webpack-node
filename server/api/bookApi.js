var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

var conn = mysql.createConnection(models.mysql);

conn.connect();

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

router.post('/bookSelect',(req,res)=>{
	var sql = $sql.booklist.selectBook;
	conn.query(sql,function(err,result){
		if(err){
			console.log(err);
		}
		if(result){
			jsonWrite(res, result);
		}
	})
});

router.post('/selectFromNews',(req,res)=>{
	var sql = $sql.booklist.selectFromNews;
	conn.query(sql,function(err,result){
		if(err){
			console.log(err);
		}
		if(result){
			jsonWrite(res, result);
		}
	})
});

router.post('/doneBooksSelect',(req,res)=>{
	var sql = $sql.booklist.doneBooksSelect;
	conn.query(sql,function(err,result){
		if(err){
			console.log(err);
		}
		if(result){
			jsonWrite(res, result);
		}
	})
});

router.post('/bookById',(req,res)=>{
	var sql = $sql.booklist.bookById;
	var params = req.body;
	conn.query(sql,[params.id], function(err,result){
		if(err){
			console.log(err);
		}
		if(result){
			jsonWrite(res, result);
		}
	})
});
 
module.exports = router;