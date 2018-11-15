document.getElementById('sales').addEventListener('submit', mksale);
function mksale(e){
    e.preventDefault();
    let cost = document.getElementById('cost').value;
    let description = document.getElementById('descritpion').value;
    fetch('https://njeri.herokuapp.com/api/v2/sales',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body:JSON.stringify({
            cost:cost,
            description:description
        })
        
    })
    .then((res) => res.json())
    .then(function (data) {
         console.log(data);
        if (data.satus === 'pass'){
            alert("Sale was created");
        }
        let result = message(data);
        let div = document.getElementById('make');
        div.innerHTML = result;
        setTimeout(()=>{
            result = '';
            div.innerHTML = result;
        },10000)
    })
}

function message(res){
    if(res.satus === 'pass') {
        return`<h1 style='color:green'> Sale order made created</h1>` 
    }else if(res.message === 'cost cannot be negative' || 'one of the items you are trying to make a sale of is not in store please check again' ){
        return`<h1 style='color:red'>${res.message}</h1>'`
    }
}