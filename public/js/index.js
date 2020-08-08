// const { get } = require("@adonisjs/framework/src/Route/Manager");

function checkLoginState() {
    FB.getLoginStatus(statusChangeCallback);
}
async function statusChangeCallback(response) {
    const { userID, accessToken } = response.authResponse;
    const result = await fetch(`https://graph.facebook.com/v8.0/${userID}?fields=picture,id,name&access_token=${accessToken}`, { method: "GET" })

    const data = await result.json();
    console.log(data)
    const _csrf = document.getElementsByName("_csrf")[0].value
    const form = new FormData()
    form.append("username", data.id)
    form.append("email", `${data.id}@facebook.com`)
    form.append("password", `facebook:${data.id}`)

    await fetch("/api/register", { method: "POST", body: form })
}