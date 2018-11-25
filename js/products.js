window.onload = function getprods() {
  fetch("https://njeri.herokuapp.com/api/v2/products", {
      headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(function(data) {
      const products = data.products;
      console.log("product", products);
      const productTable = `<div>
            <table>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>View</th>
                <th>delete</th>
              </tr>
              ${products.map(
                product =>
                  `<tr>
                  <td>${product.product_name}</td>
                  <td>${product.description}</td>
                  <td>${product.price}</td>
                  <td>${product.category_name}</td>
                  <td><button id='product_id' value=${product.product_id} onclick='prodInfo()' >View</button></td>
                  <td><button id='product_id_del' value='${product.product_id}' onclick='prodDelete()' >delete</button></td>
                </tr>`
              )}
            </table>
          </div>`;

      (body = document.getElementsByTagName("body")[0]),
      (div = document.createElement("div"));
      div.innerHTML = productTable;
      body.appendChild(div);
    })
    .catch(function(error) {
      console.log(error);
    });
};


function prodInfo(){
  var product_id = document.getElementById('product_id').getAttribute('value');
  console.log(">>>>>",product_id);
  fetch(`https://njeri.herokuapp.com/api/v2/products/${product_id}`,{
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
  .then((res) => res.json())
  .then(function (data) {
        let respns = message(data);
        let div = document.getElementById('send');
        div.innerHTML = respns;
        setTimeout(()=>{
            respns = '';
            div.innerHTML = respns;
        },8000)
        console.log(">>>>>>>>",data);
        const result = data.product;
        let pros = result.product_name;
        console.log("idddddd",pros);
        ol = document.getElementById('send');
            let li = createNode('li'),
                h3 = createNode('h3'),
                h5 = createNode('h5'),
                h6 = createNode('h6'),
                p = createNode('p');
            h3.innerHTML = `product name:${result.product_name}`;
            h5.innerHTML  =`product description:${result.description}`;
            h6.innerHTML = `product Id:${result.product_id}`;
            p.innerHTML =`product price:${result.price}ksh`;
            inject(li, h3);
            inject(li, h5);
            inject(li, h6);
            inject(li, p);
            inject(ol, li);
  
    })
    .catch(function(err){
        console.log(err)
    })
}

function createNode(el){
    return document.createElement(el);
}

function inject(p, c){
    return p.appendChild(c);
}


function message(res){
    return`<h2>${res.message}<h2>`
}



function prodDelete(){
  const product_id = document.getElementById('product_id_del').getAttribute('value');
  console.log(">>>>>",product_id);
  fetch(`https://njeri.herokuapp.com/api/v2/products/${product_id}`,{
        method:'DELETE',
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
  .then((res) => res.json())
  .then(function (data) {
        let respns = message(data);
        let div = document.getElementById('rec');
        div.innerHTML = respns;
        if(data.message === 'Un-authorized Access only Admin allowed'){
             setTimeout(()=>{
            respns = '';
            div.innerHTML = respns;
        },3000)
        }
        else{
        setTimeout(()=>{
            respns = '';
            div.innerHTML = respns;
            window.location.reload();
        },3000)
        console.log(">>>>>>>>",data);
        const result = data.product;
      }

    })
    .catch(function(err){
        console.log(err)
    })

}