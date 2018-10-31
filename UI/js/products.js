document.getElementById('getprod').addEventListener('submit', getprods);
function getprods(){
    fetch('https://njeri.herokuapp.com/api/v2/signup',{
        headers:{
            'Authorization': localStorage.getItem('token')
        },  
    })
    .then(data=> res.json())
    .then(function (data) {
        let output = `<h2>Products</h2>`;
        data.forEach(function(products){
        	output += `
        	<div>
        		<h3>${products.name}</h3>
        	`;
        })
        document.getElementById('get').innerHTML = output;  
    })
}
