'use strict'

const Database = use("Database");

class AuthController {
    login ({view}) {
        //const user = await.Database.from('profiles')
        return view.render("login",{})
    }
    async loginUser ({view , request , response}) {
        const {username , password} = request.body
        //await Database.table("users").insert({email , password})
        //await Database.insert({email , password , username})
    }

    register({view}) {
        return view.render("register",{})
    }
    async registerUser({request , response}) { // * --> async
        const {firstname , lastname , username , password , email} = request.body;
        await Database.from("users").insert({firstname , lastname , username , password , email}) // yield --> await
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
