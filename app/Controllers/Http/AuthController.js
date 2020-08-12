'use strict'

const Database = use("Database");
let token;
let currentUsername;
let news_ID;

class AuthController {

    home({view}) {
        return view.render("/home" , {token , currentUsername})
    }
    async login ({view}) {
        // const dataDB = await Database.from("profiles").select("username")
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
        await Database.from("news").insert({news_Topic , news_Content , news_Cg, news_Date}) 
        return response.redirect("/home")
    }
    categories_world ({view}) {
        return view.render("categories-world" ,{token , currentUsername})
    }
    categories_tech ({view}) {
        return view.render("categories-tech" ,{token , currentUsername})
    }
    categories_sci ({view}) {
        return view.render("categories-sci" ,{token , currentUsername})
    }
    categories_business ({view}) {
        return view.render("categories-business" ,{token , currentUsername})
    }
    // news_1({view , response}) {
    //     news_ID = "1";
    //     return view.render("news_1" ,{token , currentUsername})
    // }
    async news_1({view , request , response}) {
        news_ID = 1;
        const news_Comment = await Database.from("comments").select("*").where({news_ID})
        return view.render("news_1" , {news_Comment,token,currentUsername})
    }
    async news_2({view , request , response}) {
        news_ID = 2;
        const news_Comment = await Database.from("comments").select("*").where({news_ID})
        return view.render("news_2" , {news_Comment,token,currentUsername})
    }
    async news_3({view , request , response}) {
        news_ID = 3;
        const news_Comment = await Database.from("comments").select("*").where({news_ID})
        return view.render("news_3" , {news_Comment,token,currentUsername})
    }
    async news_4({view , request , response}) {
        news_ID = 4;
        const news_Comment = await Database.from("comments").select("*").where({news_ID})
        return view.render("news_4" , {news_Comment,token,currentUsername})
    }
    async add_news_comment({request , response}) {
        let cm_Date = new Date();
        let dd = String(cm_Date.getDate()).padStart(2, '0');
        let mm = String(cm_Date.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = cm_Date.getFullYear();
        cm_Date= dd + '/' + mm + '/' + yyyy;
        const {cm_Content , which_web} = request.body
        const username = currentUsername
        await Database.from("comments").insert({cm_Content,cm_Date,username,news_ID})
        if(news_ID == 1) {
            return response.redirect("news_1")
        }
        else if(news_ID == 2) {
            return response.redirect("news_2")
        }
        else if(news_ID == 3) {
            return response.redirect("news_3")
        }
        else if(news_ID == 4) {
            return response.redirect("news_4")
        }
    }
}

module.exports = AuthController

//SELECT * FROM 'user'
//WHERE 'name' = 'John';
