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









window.onload = function getsales(){
    const user_id = jwtDecoded.sub;
    console.log("user logged in",user_id);
    fetch(`https://njeri.herokuapp.com/api/v2/user-sales/${user_id}`,{
        headers:{
            'Authorization': localStorage.getItem('token')
        },  
    })
    .then((res)=> res.json())
    .then(function (data) {  
        const sales = data.sales;
        console.log("sale", sales);
        const salesTable = `<div>
            <table>
              <tr>
                <th>sale_id</th>
                <th>user_email</th>
                <th>cost</th>
                <th>description</th>
              </tr>
              ${sales.map(
                sale =>
                  `<tr>
                  <td>${sale.sale_id}</td>
                  <td>${sale.email}</td>
                  <td>${sale.cost}</td>
                  <td>${sale.description}</td>
                </tr>`
              )}
            </table>
          </div>`;

      (body = document.getElementsByTagName("body")[0]),
      (div = document.createElement("div"));
      div.innerHTML = salesTable;
      body.appendChild(div);
    })
    .catch(function(error){
       return`<h1>&{error.message</h1>`
    })
}

function message(res){
    return`<h2>${res.message}<h2>`
}




