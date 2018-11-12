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
                <th>Descriptiom</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
              ${products.map(
                product =>
                  `<tr>
                  <td>${product.product_name}</td>
                  <td>${product.description}</td>
                  <td>${product.price}</td>
                  <td>${product.category_name}</td>
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


document.getElementById('product-info').addEventListener('click', prodInfo);

function prodInfo(e){
  const product_id = document.querySelector('input[type="tel"]').value;
  console.log(product_id);
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
        },10000)
        console.log(">>>>>>>>",data);
        const result = data.product;
        let pros = result.product_name;
        console.log("idddddd",pros);
        ol = document.getElementById('send');
            let li = createNode('li'),
                h5 = createNode('h5'),
                h3 = createNode('h3'),
                h6 = createNode('h6'),
                p = createNode('p');
            h5.innerHTML  =`product description:${result.description}`;
            h3.innerHTML = `product name:${result.product_name}`;
            h6.innerHTML = `product Id:${result.product_id}`;
            p.innerHTML =`product price:${result.price}ksh`;
            inject(li, h5);
            inject(li, h3);
            inject(li, h6);
            inject(li, p);
            inject(ol, li);
  
    })
    .catch(function(err){
        console.log(err)
    })


  e.preventDefault();
}

function createNode(el){
    return document.createElement(el);
}

function inject(p, c){
    return p.appendChild(c);
}


document.getElementById('product-delete').addEventListener('click', prodDel);

function prodDel(e){
  const product_id = document.querySelector('input[type="tel"]').value;
  console.log(product_id);
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
        setTimeout(()=>{
            respns = '';
            div.innerHTML = respns;
        },10000)
        console.log(">>>>>>>>",data);
        const result = data.product;
        let pros = result.product_name;
        console.log("idddddd",pros);
    })
    .catch(function(err){
        console.log(err)
    })


  e.preventDefault();
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



document.getElementById('product-update').addEventListener('click', prodUpdt);

function prodUpdt(e){
  const product_id = document.querySelector('input[type="tel"]').value;
  console.log(product_id);
  fetch(`https://njeri.herokuapp.com/api/v2/products/${product_id}`,{
        method:'PUT',
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
  .then((res) => res.json())
  .then(function (data) {
        let respns = message(data);
        let div = document.getElementById('next');
        div.innerHTML = respns;
        setTimeout(()=>{
            respns = '';
            div.innerHTML = respns;
        },10000)
        console.log(">>>>>>>>",data);
        const result = data;
        console.log(">>>>>>>NEW",result);
  
    })
    .catch(function(err){
        console.log(err)
    })


  e.preventDefault();
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


