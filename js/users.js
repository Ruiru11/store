window.onload = function getusers() {
  fetch("https://njeri.herokuapp.com/api/v2/users", {
      headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(function(data) {
        let result = message(data);
        console.log("error message",result);
        if(data.message === 'Un-authorized Access only Admin allowed' ){
            let div = document.getElementById('send');
        div.innerHTML = result;
        setTimeout(()=>{
            result = '';
            div.innerHTML = result;
        },10000)
        alert("contact admin to view this page");
        window.location.href='index.html'
        }
        else{
          console.log("users>>>",data);
      const users = data.users;
      console.log("users", users );
      const userTable = `<div>
              ${users.map(
                user =>
                  `
                  <div class="card">
                  <h1>${user.user_email}</h1>
                  <h4>User_id:${user.user_id}</h4>
                  <h3>User_role:${user.user_role}</h3>
                  <p><button id="user" value=`+user.user_id+` onclick="updateUser()">Update user role</button></p>
                  </div>`
              )}
          </div>`;

      (body = document.getElementsByTagName("body")[0]),
      (div = document.createElement("div"));
      div.innerHTML = userTable;
      body.appendChild(div);
        }

      
    })
    .catch(function(error) {
      console.log(error);
    });
};

function message(res){
    return`<h2>${res.message}<h2>`
}


function updateUser(){
  const user_id = document.getElementById('user').getAttribute('value');
  console.log(">>>>>",user_id);
}