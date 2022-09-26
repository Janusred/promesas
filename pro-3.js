


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
        setTimeout(()=> resolve(numero+1),300);
    });
}

let cosas = [sumarLento(10),sumarLento(5),true,'Janus'];

Promise.all(cosas)
.then( respuestas =>{
    console.log(respuestas);
}).catch(console.log);
//sumarLento(5).then(console.log);
//sumarRapido(10).then(console.log);