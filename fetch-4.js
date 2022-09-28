
let img=document.querySelector('img');

fetch('imgII.png').then(resp=> resp.blob())
.then(imagen=>{
var imgPath= URL.createObjectURL(imagen);
img.src= imgPath;

});