'use strict'

const Database = use('Database');

class AuthController {
    async login ({view, request , response}) {

        // const users = await  Database.select("name","age").from("user");
        // const name = "Charnchon";
        // const age = 155;
        // const friends = ["bot","boat", "boy" , "boss"];
        // const address ={
        //     postcode: "10140";
        //     country: "Thailand";
        // }
        return view.render("login");
    }

    loginUser({view, request , response}) {
        const people = request.body;
        console.log(people)
        return response.redirect("/login");
    }

    register ({view}) {
        return view.render("register");
    }

    home (context) {
        return view.render("home");
    }

}

module.exports = AuthController




