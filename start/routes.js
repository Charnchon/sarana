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

Route.on('/').render('home')
//Route.on('/login').render('login')
Route.get("/login", "AuthController.login")
Route.post("/login" , "AuthController.loginUser")

Route.get("/register" , "AuthController.register")
Route.post("/register" , "AuthController.registerUser")
Route.post("/api/register" , "AuthController.registerUser")

Route.get("/index" , "AuthController.index")
Route.get("/slideshow" , "AuthController.slideshow")

Route.get("/addnews" , "AuthController.addnews")
