window.onload = function getprods(){
    fetch('https://njeri.herokuapp.com/api/v2/products',{
        headers:{
            'Authorization': localStorage.getItem('token')
        },  
    })
    .then((res)=> res.json())
    .then(function (data) {
        console.log(data);
        ul = document.getElementById('products');
        let products = data.products;
        return products.map(function(product){
            let li = createNode('li'),
                h2 = createNode('h2'),
                h5 = createNode('h5'),
                p  = createNode('p'),
                h3 = createNode('h3'),
                h4 = createNode('h4');
            h2.innerHTML = `Product Name:${product.product_name}`;
            h5.innerHTML = `Product Id:${product.product_id}`;
            p.innerHTML = `Product Description:${product.description}`;
            h3.innerHTML =`Product price:${product.price}ksh`;
            h4.innerHTML  =`Product Category:${product.category_name}`;
            inject(li, h2);
            inject(li, h5);
            inject(li, p);
            inject(li, h3);
            inject(li, h4);
            inject(ul, li);
        })

    })
    .catch(function(error){
        console.log(error)
    })
}

function createNode(el){
    return document.createElement(el);
}

function inject(p, c){
    return p.appendChild(c);
}


