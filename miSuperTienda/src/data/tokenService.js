var API_BASE = "http://localhost:8000/api/v1/"


async function getToken (correo, password) {  
var url = API_BASE+"auth/login";

const token = await fetch (url, {
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: correo,
        password: password
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