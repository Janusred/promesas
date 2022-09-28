
let usuario={
    name:'Janus',
    gender:31
};

fetch('https://reqres.in/api/users',{
    method:'POST',
    body: JSON.stringify(usuario),
    headers:{
        'Content-Type':'application/json'
    }
})
.then(resp=> resp.json())
.then(console.log)
.catch(error =>{
    console.log('error Janus');
    console.log(error);
});