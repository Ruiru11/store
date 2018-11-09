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
                <th>View</th>
              </tr>
              ${products.map(
                product =>
                  `<tr>
                  <td>${product.product_name}</td>
                  <td>${product.description}</td>
                  <td>${product.price}</td>
                  <td>${product.category_name}</td>
                  <td><button  name="producr" id=${
                    product.product_id
                  }>View</button></td>
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

let butonn = document.getElementsByName("producr")
butonn.addEventListener('submit', viewProduct);

function viewProduct() {
  let product_id = document.getElementsByName("producr");
  console.log(">>>>>>>>>>>>>>>", product_id);
}