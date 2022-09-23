let nuevo = [];
let grupos = [];
let valores = [];
let letra = '[ ';
var grupoUno = new Object()
grupoUno = {a:1, b:2, c:3}
var grupoDos = new Object()
grupoDos = {a:"Apple", b:"Microsoft", c:"Google"}
var grupoTres = new Object()
grupoTres = {key1:true, key2:false, key3:undefined}
function iniciar(){
    let ordenarSeparar = document.getElementById('boton-orden-separar')
    ordenarSeparar.addEventListener('click', mostrar)
    let botonLimpiar = document.getElementById('boton-limpiar')
    botonLimpiar.addEventListener('click', limpiar)
}
function mostrar(){
    let ordenarSeparar = document.getElementById('boton-orden-separar')
    ordenarSeparar.disabled = true;
    ordenar(grupoUno);
    crearMensaje();
    ordenar(grupoDos);
    crearMensaje();
    ordenar(grupoTres);
    crearMensaje();
}
function ordenar (objeto){
    for (let llave of Object.keys(objeto).sort()){
        nuevo[llave] = objeto[llave];
    }
    grupos = Object.keys(nuevo);
    valores = Object.values(nuevo);
    return{
        nuevo, grupos, valores
    }
}
function crearMensaje(){
    let seccionMensajes = document.getElementById('mensajes')
    let mensajeGrupos = document.createElement('p')
    for(let i=0; i <= grupos.length-1; i++){
        letra = letra + grupos[i]+ ' ';
    }
    letra = letra + '] [ ';
    for(let j=0; j <= valores.length-1; j++){
        letra = letra  + valores[j] + '  ';
    }
    mensajeGrupos.innerHTML =  letra + ']';
    letra = ' [ '; 
    nuevo = [];
    seccionMensajes.appendChild(mensajeGrupos) 
}
function limpiar(){
    location.reload();
}
window.addEventListener('load', iniciar)