'use strict'

const Database = use("Database");
let token;
let currentUsername;

class AuthController {

    home({view}) {
        return view.render("/home" , {token , currentUsername})
    }
    async login ({view}) {
        // const dataDB = await Database.from("profiles").select("username")
        // var valueDB = JSON.stringify(dataDB)
        // console.log(valueDB)
        return view.render("/login" , {token , currentUsername})
    }
    async loginUser ({request , response}) {
        const {username , password} = request.body
        const dataDB = await Database.from("profiles").select("username","password").where({username,password})
        if(dataDB.length) {
            token = 1;
            currentUsername = username
            return response.redirect('/home')
        }
        else {
            token = 0;
            return response.redirect('/register')
        }
    }

    logoutUser({response}) {
        token = 0
        return response.redirect('/home')
    }

    register({view}) {
        return view.render("register" , {token , currentUsername})
    }
    async registerUser({request , response}) { // * --> async
        const {firstname , lastname , username , password , email, age, gender} = request.body;
        await Database.from("profiles").insert({firstname , lastname , username , password , email, age, gender}) // yield --> await
        //await Database.insert({email,password}).into("users")
        return response.redirect("/login")
    }

    index({view}) {
        return view.render("" , {token , currentUsername})
    }
    slideshow ({view}) {
        return view.render("slideshow" , {token , currentUsername})
    }
    addnews({view}) {
        return view.render("addnews" , {token , currentUsername})
    }
    async addNews({request , response}) { 
        const {news_Topic , news_Content , news_Cg, news_Date} = request.body;
        await Database.from("new").insert({news_Topic , news_Content , news_Cg, news_Date}) 
        return response.redirect("/home")
    }
    categories_world ({view}) {
        return view.render("categories-world" ,{token , currentUsername})
    }
    news({view}) {
        return view.render("news_1" ,{token , currentUsername})
    }
}

module.exports = AuthController

//SELECT * FROM 'user'
//WHERE 'name' = 'John';
