'use strict'

const Database = use("Database");
let token;
let currentUsername;

class AuthController {

    async home({view}) {
        const Topic = await Database.from("adds").select("news_Topic","news_Date").where({id: 1})
        const {news_Topic,news_Date } = Topic[0]
        return view.render("/home" , {token , currentUsername, news_Topic , news_Date})
    }

    async login ({view}) {
        // const dataDB = await Database.from("profiles").select("username")
        // var valueDB = JSON.stringify(dataDB)
        // console.log(valueDB)
        return view.render("login" , {token , currentUsername})
    }
    async loginUser ({request , response}) {
        const {username , password} = request.body
        const dataDB = await Database.from("profiles").select("username","password").where({username,password})
        if(dataDB.length) {
            token = 1;
            currentUsername = username
            return response.redirect('/login')
        }
        else {
            token = 0;
            return response.redirect('/login')
        }
    }

    logoutUser({response}) {
        token = 0
        return response.redirect('/register')
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
        await Database.from("adds").insert({news_Topic , news_Content , news_Cg, news_Date}) 
        return response.redirect("/home")
    }
}

module.exports = AuthController

//SELECT * FROM 'user'
//WHERE 'name' = 'John';
