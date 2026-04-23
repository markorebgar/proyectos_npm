var API_BASE = "http://localhost:8000/api/v1/"


async function getToken () {  
var url = API_BASE+"auth/login";

const token = await fetch (url, {
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: "admin@tienda.com",
        password: "Password"
    })
})
var data;
if(!response.ok){
    data = "Credenciales erroneas";
}else{
data = await response.json();
}
return data.accessToken;
}