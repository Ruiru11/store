document.getElementById('lg').addEventListener('submit', gtuser);
function gtuser(e){
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    fetch('https://njeri.herokuapp.com/api/v2/signin',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email:email,
            password:password
        })
        
    })
    .then(res=> res.json())
    .then(function (data) {
        let result = token(data);
        let div = document.getElementById('not');
        div.innerHTML = result;
        setTimeout(()=>{
            result = '';
            document.innerHTML = result;
        })
    })
}
function token(res){
    localStorage.setItem('token',res.token);
    return`<h2>${res.message}<h2>`
}