var sqlMap = {	
	booklist: {
		selectBook: 'select * from booklist limit 6',
		selectFromNews: 'select * from booklist where news=1 and recommend=1',
		doneBooksSelect: 'select * from booklist where done=1 and recommend=1',
		bookById: 'select * from booklist where id = ?',
		doneBooks: 'select * from booklist where done = 1',
	}
}

module.exports = sqlMap;