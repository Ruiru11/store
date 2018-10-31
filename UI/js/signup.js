document.getElementById('fm').addEventListener('submit', lguser);
function lguser(e){
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    fetch('https://njeri.herokuapp.com/api/v2/signup',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body:JSON.stringify({
            email:email,
            password:password
        })
    })
    .then(res=> res.json())
    .then(function (data) {
        let result = token(data);
        let div = document.getElementById('new');
        div.innerHTML = result;
        setTimeout(()=>{
            result = '';
            div.innerHTML = result;
        },8000)
    })
}
function token(res){ 
    return`<h3>${res.message}<h3>`
}