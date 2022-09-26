

function sumaUno( numero , callback) {
    if(numero >= 7 ){
        callback('Numero alto');
        return;
    }
    setTimeout (function(){
          callback( null, numero +1);
    },800);
}
  

sumaUno( 5 ,function(erro, nuevoValor ){
    //error no funciona paso a segundo callback
    

    sumaUno( nuevoValor,function(error,nuevoValor2){
        if(error){
            console.log(error);
            return;
        }
        sumaUno( nuevoValor2,function(error,nuevoValor3){
            if(error){
                console.log(error);
                return;
            }
            console.log(nuevoValor3);
        });
    });
});