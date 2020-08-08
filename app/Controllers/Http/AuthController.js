'use strict'

const Database = use("Database");

class AuthController {
    async login ({view , request , response}) {
        //const user = await.Database.from('profiles')
        return view.render("login",{})
    }
    loginUser ({view , request , response}) {
        const {email , password} = request.body
        //await Database.table("users").insert({email , password})
        //await Database.insert({email , password , username})
        return response.redirect("login" , {})
        // return response.redirect("/login")
    }

    register({ view, request, response }) {
        return view.render("register");
      }
      async registeruser({ view, request, response }) {
        const {firstname, lastname, email, age, gender, password, username } = request.body
        await Database.from("profile").insert({firstname, lastname, email, age, gender, password, username});
    
        return response.redirect("/login");
      }

    index({view}) {
        return view.render("index",{})
    }
    slideshow ({view}) {
        return view.render("slideshow" , {})
    }
}

module.exports = AuthController

//SELECT * FROM 'user'
//WHERE 'name' = 'John';



