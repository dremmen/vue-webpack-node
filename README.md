
##VUE2.0+vue-cli+webpack+node.js+mysql实现小说网站

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

##  新添章节上拉刷新和更改一些小bug   （2017/12/9）

### 数据库太大了，上传太久，就不传了
### 这里给一位大大上下拉刷新的文章 [上下拉刷新](http://blog.csdn.net/qq_16559905/article/details/70160807)


## 新添加了登录注册功能，只是存进数据库，还没有具体的实现书架功能，最近有点忙，书架功能这两天再补上去	（2017/12/12）

## 新添加简单的添加书架，还没完成，明天继续	（2017/12/13）
	* 主要实现方式是：获取书本的id，组成字符串存进用户表
	* 加入书架是判断该用户是否存在这本书
		* 存在不能添加
		* 判断用户，主要是获取登录时存进localStorage里面的用户id
	* 目前只有登录的用户才能添加书架

## 主要功能截图

### 首页介绍
![index](./demo-show/index.png)
### 书的首页介绍
![books](./demo-show/books.png)
### 书的章节列表介绍
![booksList](./demo-show/booksList.png)
### 看书介绍
![booksContent](./demo-show/booksContent.png)
### 搜索介绍
![booksSearch](./demo-show/booksSearch.png)
### 书架介绍
![bookShelf](./demo-show/bookShelf.png)

# 具体功能能作者还在完善，敬请期待
