'use strict'

const Database = use("Database");
let token = 0;

class AuthController {

    login ({view}) {
        return view.render("login" , {token})
    }
    async loginUser ({request , response}) {
        const {username , password} = request.body
        const dataDB = await Database.from("profiles").select("username","password").where({username,password})
        if(dataDB.length) {
            token = 1;
            return response.redirect('/login')
        }
        else {
            token = 0;
            return response.redirect('/login')
        }
    }

    register({view}) {
        return view.render("register",{})
    }
    async registerUser({request , response}) { // * --> async
        const {firstname , lastname , username , password , email, age, gender} = request.body;
        await Database.from("profiles").insert({firstname , lastname , username , password , email, age, gender}) // yield --> await
        //await Database.insert({email,password}).into("users")
        return response.redirect("/login")
    }

    index({view}) {
        return view.render("index",{})
    }
    slideshow ({view}) {
        return view.render("slideshow" , {})
    }
    addnews({view}) {
        return view.render("addnews",{})
    }
    async addNews({request , response}) { 
        const {newsTopic , newsContent , newsCg, writer, username, newsDate } = request.body;
        await Database.from("new").insert({newsTopic , newsContent , newsCg, writer, username, newsDate}) 
        return response.redirect("/login")
    }
}

module.exports = AuthController

//SELECT * FROM 'user'
//WHERE 'name' = 'John';
