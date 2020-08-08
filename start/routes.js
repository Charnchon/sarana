'use strict'

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


Route.get("/login", "AuthController.login");
Route.post("/login", "AuthController.loginuser");

Route.get("/register", "AuthController.register");
Route.post("/register", "AuthController.registeruser");

Route.post("/api/register", "AuthController.registeruser")