var token = localStorage.getItem('token')
console.log("token",token);

function parseJwt(token) {
  try {
    // Get Token Header
    const base64HeaderUrl = token.split('.')[0];
    const base64Header = base64HeaderUrl.replace('-', '+').replace('_', '/');
    const headerData = JSON.parse(window.atob(base64Header));

    // Get Token payload and date's
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const dataJWT = JSON.parse(window.atob(base64));
    dataJWT.header = headerData;
    
// TODO: add expiration at check ...


    return dataJWT;
  } catch (err) {
    return false;
  }
}

const jwtDecoded = parseJwt(token) ;
if(jwtDecoded)
{
    console.log(jwtDecoded)
}

if(jwtDecoded.role ==="attendant"){
		window.location.href='employee.html'
    }
if(jwtDecoded.role ==="admin"){
	window.location.href='admin.html'
   
}
if(token ===null){
	alert("You need to login to if you are an admin or an attendant");
}



