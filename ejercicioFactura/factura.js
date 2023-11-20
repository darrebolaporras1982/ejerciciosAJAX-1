let producto;
let submit;
let cantidad;
let tabla_factura;
const PATRON=/^[a-zA-Z\sáéíóúüñÑ]+$/;
let Error=[];
let mensaje="";
document.addEventListener("DOMContentLoaded",init);

function init(){
    
    submit=document.getElementById("submit");
    tabla_factura=document.getElementById("tabla_factura");
    submit.addEventListener("click",function(e){
    e.preventDefault();
    validarCampos();
});
}
function validarCampos(){
    validarProducto();
    console.log(producto);
    validarCantidad();
    if(Error.length>0){
        alert(Error);
        Error=[];
    }else{
        insertarLineArticulo();
    }
}
function validarProducto(){
    producto=document.getElementById("producto").value;
    let validacion=PATRON.test(producto);
    if(!validacion || validacion==""){
        mensaje="Revisa el campo del producto que esté bien escrito";
        Error.push(mensaje);
    }else{
        return true;
    }
}
function validarCantidad(){
    cantidad=document.getElementById("cantidad");
    if(cantidad.value>0 && cantidad.value<6){
        return true;
    }else{
        mensaje="no se admiten pedidos superiores a 5 unidades ni inferiores o iguales 0";
        Error.push(mensaje);
    }
}

function insertarLineArticulo(){

}
function encontrarArticulo(){
    fetch
}