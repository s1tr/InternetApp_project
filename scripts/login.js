const usrname = document.getElementById('usrename')
const password = document.getElementById('password')
function login() {
     event.preventDefault()
     if (usrname.value.length === 0) {
          alert("You must enter a username !")
          return;
     }

     if (password.value.length === 0) {
          alert("You must enter a password !")
          return;
     }


     window.location.href = "./index.html";
}


