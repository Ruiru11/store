window.onload = function getsales(){
    fetch('https://njeri.herokuapp.com/api/v2/sales',{
        headers:{
            'Authorization': localStorage.getItem('token')
        },  
    })
    .then((res)=> res.json())
    .then(function (data) {
        let result = message(data);
        console.log(">>>..",result)
        if(data.message === 'Un-authorized Access only Admin allowed' ){
            let div = document.getElementById('send');
        div.innerHTML = result;
        setTimeout(()=>{
            result = '';
            div.innerHTML = result;
        },10000)
        alert("contact admin to view this page");
        window.location.href='index.html'
        }
        else{
             const sales = data.sales;
        console.log("sale", sales);
        const salesTable = `<div>
            <table>
              <tr>
                <th>sale_id</th>
                <th>user_id</th>
                <th>cost</th>
                <th>description</th>
              </tr>
              ${sales.map(
                sale =>
                  `<tr>
                  <td>${sale.sale_id}</td>
                  <td>${sale.user_id}</td>
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
        }
        
       

    })
    .catch(function(error){
       return`<h1>&{error.message</h2>`
    })
}

function message(res){
    return`<h2>${res.message}<h2>`
}