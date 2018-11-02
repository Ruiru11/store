window.onload = function getsales(){
    fetch('https://njeri.herokuapp.com/api/v2/sales',{
        headers:{
            'Authorization': localStorage.getItem('token')
        },  
    })
    .then((res)=> res.json())
    .then(function (data) {
        console.log(data)
        let result = message(data);
        let div = document.getElementById('new');
        div.innerHTML = result;
        setTimeout(()=>{
            result = '';
            div.innerHTML = result;
        },8000)
        console.log(data);
        ol = document.getElementById('sales');
        let sales = data.sales;
        return sales.map(function(sale){
            let li = createNode('li'),
                h1 = createNode('h1'),
                p = createNode('p'),
                h4 = createNode('h4'),
                h3 = createNode('h3');
            h1.innerHTML  =`Sale Items:${sale.description}`;
            p.innerHTML = `Sale Id:${sale.sale_id}`;
            h4.innerHTML = `User Id:${sale.user_id}`;
            h3.innerHTML =`Sale Cost:${sale.cost}ksh`;
            inject(li, h1);
            inject(li, p);
            inject(li, h4);
            inject(li, h3);
            inject(ol, li);
        })

    })
    .catch(function(error){
       return`<h1>&{error.message</h2>`
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