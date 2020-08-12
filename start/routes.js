'use strict'

const AuthController = require('../app/Controllers/Http/AuthController');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get("/news_1" , "AuthController.news_1")
Route.on("/news_1" , "AuthController.show_news_comment")
Route.post("/news_1" , "AuthController.add_news_comment")

Route.get("/" , "AuthController.home")
Route.get("/home" , "AuthController.home")

//Route.on('/login').render('login')

Route.get("/login" , "AuthController.login")
Route.post("/login" , "AuthController.loginUser")

Route.get("/layout" , "AuthController.logoutUser")

Route.get("/register" , "AuthController.register")
Route.post("/register" , "AuthController.registerUser")
Route.get("/api/register" , "AuthController.registerUser")

Route.get("/index" , "AuthController.index")
Route.get("/slideshow" , "AuthController.slideshow")

Route.on("/add-news" , "AuthController.addnews").render("add-news")

Route.get("/addnews" , "AuthController.addnews")
Route.post("/addnews" , "AuthController.addNews")

Route.get('/categories-world' , "AuthController.categories_world")
Route.get('/categories-tech' , "AuthController.categories_tech")
Route.get('/categories-sci' , "AuthController.categories_sci")
Route.get('/categories-business' , "AuthController.categories_business")
