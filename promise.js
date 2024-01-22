// //Callback
// function LogInPage(WelcomePage,callback){
//     setTimeout(function(){
//         console.log(WelcomePage)
//         callback();
//     },3000)

// }
// function Result(){
//     console.log("LogIn successfully")
// }
// LogInPage("Welcome to our website \nPlease logIn" ,Result)

//PROMISE

function isAuthenticated() {
    return Math.random() < 1;
  }
  function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    })