function registrar(){
  let email= document.getElementById("email").value;
  let password= document.getElementById("password").value;

  //copyclip de firebase documentacion
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(){
    verificar()
  })
  .catch(function(error) {
    // en caso de error mostrar:
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ...
  });
  var user = firebase.auth().currentUser;

}
 
function ingresar(){
  let email2= document.getElementById("email2").value;
  let password2= document.getElementById("password2").value;
  firebase.auth().signInWithEmailAndPassword(email2, password2)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}


function observador(){
  var content = document.getElementById("content")
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      
      // User is sig
      var displayName = user.displayName;
      var email = user.email;
      console.log(email)
      var emailVerified = user.emailVerified;
      console.log("***************")
      console.log(emailVerified)
      console.log("***************")
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      console.log(uid)
      var providerData = user.providerData;
      content.innerHTML=`

        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title center">Bienvenid@ ${user.email}!</span>
            <p>En el link de abajo podra ingresar a su información.</p>
            <a href="https://www.google.com">INGRESE A SU TABLERO</a>
            </div>
            <div class="card-action">
            <a onClick="cerrar()" class="waves-effect waves-light btn"><i class="material-icons left"></i>CERRAR SESIÓN</a>
          </div>
        </div>



      `
      // ...
    } else {
      console.log("No existe usuario activo!")
      // User is signed out.
      // ...
     content.innerHTML=""
    }
  });
}
observador()

function cerrar(){
  firebase.auth().signOut()
  .then(function(){
    console.log("saliendo...")
  })
  .catch(function(error){
    console.log(error)
  })
}


function verificar(){

  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
  console.log(error)
});

}