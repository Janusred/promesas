


function sumarLento ( numero ) {
    return new Promise( function(resolve,reject){
        setTimeout(function(){
            resolve(numero +1);
            //reject('Lento fallo');
        },800);
    });
}

let sumarRapido = (numero)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
        resolve('Error JAnus');
        //resolve(numero+1),300);
    },3000);
});
}
 Promise.race([ sumarLento(5),sumarRapido(10)])
 .then(respuesta=>{
    console.log(respuesta);
 }).catch(console.log);