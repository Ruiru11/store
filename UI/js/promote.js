window.onload = function getprods() {
  fetch("https://njeri.herokuapp.com/api/v2/users", {
      headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(function(data) {
      console.log(">>>>>>code",data);
      const users = data;
      console.log("users", users);
      const UserTable = `<div>
            <table>
              <tr>
                <th>Name</th>
    
              </tr>
              ${users.map(
                user =>
                  `<tr>
                  <td>${user.email}</td>
                 
                </tr>`
              )}
            </table>
          </div>`;

      (body = document.getElementsByTagName("body")[0]),
      (div = document.createElement("div"));
      div.innerHTML = UserTable;
      body.appendChild(div);
    })
    .catch(function(error) {
      console.log(error);
    });
};
