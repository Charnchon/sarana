function checkLoginState() {
  FB.getLoginStatus(statusChangeCallback);
}

async function statusChangeCallback(response) {
  const { userID, accessToken } = response.authResponse;
  const result = await fetch(
    "http://graph.facebook.com/v8.o", { method: "get"});
  const data = await result.json();
  const _csrf = document.getElementsByName("_csrf")[0].nodeValue;

  const form = new FormData();
  form.append("username", data.id)
  form.append("email", `${data.id}@facebook.com`)
  form.append("password", `facrbook:${data.id}`)

  await fetch("/api/register", { method: "POST", body:form});
}