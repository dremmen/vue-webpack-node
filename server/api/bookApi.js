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

router.post('/bookListById',(req,res)=>{
	var params = req.body.bookId;
	var sql = 'select * from book'+params;
	conn.query(sql, function(err,result){
		if(err){
			console.log(err);
		}
		if(result){
			jsonWrite(res, result);
		}
	})
});
 
router.post('/bookContentById',(req,res)=>{
	var bookId = req.body.bookId;
	var bookContentId = req.body.bookContentId;
	var sql = 'select * from book'+bookId+' where Id='+bookContentId;
	console.log(sql);
	conn.query(sql, function(err,result){
		if(err){
			console.log(err);
		}
		if(result){
			jsonWrite(res, result);
		}
	})
});

// 完整本
router.post('/doneBooks',(req,res)=>{
	var sql = $sql.booklist.doneBooks;
	conn.query(sql, function(err,result){
		if(err){
			console.log(err);
		}
		if(result){
			jsonWrite(res, result);
		}
	})
});

// 搜索
router.post('/bookSearch',(req,res)=>{
	var bookName = req.body.bookName;
	var sql = 'select * from booklist where name LIKE "%'+bookName+'%"'	
	conn.query(sql, function(err,result){
		console.log(sql);
		console.log(result)
		if(err){
			console.log(err);
		}
		if(result){
			jsonWrite(res, result);
		}
	})
});
 
module.exports = router;