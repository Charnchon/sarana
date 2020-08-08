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

    register({view}) {
        return view.render("register",{})
    }
    async registerUser({request , response}) { // * --> async
        const {email , password , username} = request.body;
        await Database.from("users").insert({email,password,username}) // yield --> await
        //await Database.insert({email,password}).into("users")

        return response.redirect("/login")
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
