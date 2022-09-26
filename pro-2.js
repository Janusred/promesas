

function sumaUno( numero , callback) {
 var promesa = new Promise( function(resolve, reject){
    setTimeout(function(){
        resolve( numero + 1);
    },800);
 }) ;
    return promesa;
}
  
sumaUno( 5 ).then(nuevoNumero =>{
    console.log(nuevoNumero);
    return sumaUno(nuevoNumero);
})
.then( nuevoNumero => {
    console.log(nuevoNumero);
    return sumaUno(nuevoNumero);
})
.then( nuevoNumero => {
    console.log(nuevoNumero);
});
