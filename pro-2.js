

function sumaUno( numero ) {
 var promesa = new Promise( function(resolve, reject){
    console.log(numero);
if (numero >= 7){
    reject('El numero es muy alto');
}

    setTimeout(function(){
        resolve( numero + 1);
    },400);
 }) ;
    return promesa;
}
  
sumaUno( 5 )
   .then( sumaUno)
    .then( sumaUno)
    .then( nuevoNumero => {
        console.log(nuevoNumero);
})
.catch( error => {
    console.log('Error en promesa');
    console.log('error');
});
