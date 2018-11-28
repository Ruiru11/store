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
                  <p><button id="user" value=`+user.user_id+` onclick="updateUser(this)">Update user role</button></p>
                  <p><button id="user-demote" value=`+user.user_id+` onclick="demoteUser(this)">Demote user role</button></p>
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


function updateUser(elemt){
  const user_id = elemt.value;
  console.log(">>>>>",user_id);
   fetch(`https://njeri.herokuapp.com/api/v2/user/${user_id}`,{
        method:'PUT',
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
  .then((res) => res.json())
  .then(function (data) {
        let respns = message(data);
        let div = document.getElementById('rec');
        div.innerHTML = respns;
        if(data.message === 'Un-authorized Access only Admin allowed'){
             setTimeout(()=>{
            respns = '';
            div.innerHTML = respns;
        },3000)
        }
        else{
        setTimeout(()=>{
            respns = '';
            div.innerHTML = respns;
            window.location.reload();
        },3000)
        console.log(">>>>>>>>",data);
        const result = data.product;
      }

    })
    .catch(function(err){
        console.log(err)
    })

}

function demoteUser(elemt){
  const user_id = elemt.value;
  console.log(">>>>>",user_id);
   fetch(`https://njeri.herokuapp.com/api/v2/user-demote/${user_id}`,{
        method:'PUT',
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
  .then((res) => res.json())
  .then(function (data) {
        let respns = message(data);
        let div = document.getElementById('user');
        div.innerHTML = respns;
        if(data.message === 'Un-authorized Access only Admin allowed'){
             setTimeout(()=>{
            respns = '';
            div.innerHTML = respns;
        },3000)
        }
        else{
        setTimeout(()=>{
            respns = '';
            div.innerHTML = respns;
            window.location.reload();
        },3000)
        console.log(">>>>>>>>",data);
        const result = data.product;
      }

    })
    .catch(function(err){
        console.log(err)
    })

}