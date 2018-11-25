document.getElementById('mke').addEventListener('submit', pstpd);
function pstpd(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let category = document.getElementById('category').value;
    let description = document.getElementById('descritpion').value;
    fetch('https://njeri.herokuapp.com/api/v2/products',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body:JSON.stringify({
            name:name,
            price:price,
            category:category,
            description:description
        })
        
    })
    .then((res) => res.json())
    .then(function (data) {
        if (data.status === 'pass'){
            window.location.href='product.html'
        }
        else{
        let result = message(data);
        let div = document.getElementById('rec');
        div.innerHTML = result;
        setTimeout(()=>{
            result = '';
            div.innerHTML = result;
        },10000)
    }
    })
    .catch(function(err){
        console.log(err)
    })
}

function message(res){
    if(res.status === 'pass') {
        return`<h1 style='color:green'> product was created</h1>` 
    }else if(res.message === 'price cannot be negative' || 'By default category should be Household' || 'product already exists'){
        return`<h1 style='color:black'>${res.message}</h1>'`
    }
}