class Autenticacion {
  autEmailPass (email, password) {
    //$('#avatar').attr('src', 'imagenes/usuario_auth.png')
    //Materialize.toast(`Bienvenido ${result.user.displayName}`, 5000)
    //$('.modal').modal('close')
   
  }
  crearCuentaEmailPass (email, password, nombres) {
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
          result.user.updateProfile({
            displayName : nombres
          });
          
          const conf = {
            url : 'file:///C:/Users/enlac/Desktop/WorkSpace/Learning/Platzi/Firebase/blogeek-platzi/public/index.html'
          };
          
          result.user.sendEmailVerification()
              .catch(err => {
                Materializa.toast(err.message, 4000);
              });
          
          firebase.auth().signOut();
          
          Materialize.toast(
              `Bienvenido ${nombres}, debes realizar el proceso de verificación`,
              4000
          );
  
          $('.modal').modal('close')
          
        })
        .catch(err => {
          console.log(err);
          Materializa.toast(err.message, 4000);
        })
  }
}
