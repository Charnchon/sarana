'use strict'

const Database = use("Database");

class AuthController {
  async login({ view, request, response }) {

    return view.render("login");
  }

  loginuser({ view, request, response }) {
    const { username, password } = request.body


    //return view.render("login");
    return response.redirect("/login")
  }

  register({ view, request, response }) {
    return view.render("register");
  }
  async registeruser({ view, request, response }) {
    const {firstname, lastname, email, age, gender, password, username } = request.body
    await Database.from("users").insert({firstname, lastname, email, age, gender, password, username});

    return response.redirect("/login");
  }
}

module.exports = AuthController;
