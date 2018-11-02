document.getElementById('fm').addEventListener('submit', lguser);
function lguser(e){
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value
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
        if (data.status === 'pass'){
            window.location.href='login.html'
        }
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
    return`<h1 style='color:red'>${res.message}<h1>`
}

var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;