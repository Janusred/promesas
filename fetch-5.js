

fetch('https://reqres.in/api/users/5')
.then(resp => {
if(resp.ok){
    return resp.json();
}else{
    //console.log('No exixte numero JAnus');
throw new Error('No existes amigo')
}

}).then(console.log)
    .catch(error=>{
        console.log('error Janus Pet');
        console.log(error);
});
