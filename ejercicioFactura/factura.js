let producto;
let submit;
let cantidad;
let tabla_factura;
const PATRON=/^[a-zA-Z\sáéíóúüñÑ]+$/;
let Error=[];
let mensaje="";
document.addEventListener("DOMContentLoaded",init);

function init(){
    mostrarTabla();
    submit=document.getElementById("submit");
    tabla_factura=document.getElementById("tabla_factura");
    submit.addEventListener("click",function(e){
    e.preventDefault();
    validarCampos();
});
}
function validarCampos(){
    validarProducto();
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
    encontrarArticulo();
    if(!encontrarArticulo){
        alert('No tienes articulos con ese nombre en tu base de datos');
    }else{

    }

}
function encontrarArticulo(){
    producto=document.getElementById("producto").value;
    
    fetch('EncuentraArticulo.php',{
        method:'POST',
        body:producto
    })
    .then(function (resultado) {
        return resultado.json();
    })
    .then(function (data){
        console.log(data);
    });
}

function mostrarTabla(){
    fetch('viewTablaProductos.php')//peticion 
    .then(function (res) {//si es correcta recoge la respuesta
        return res.json();//devuelve la respuesta en json
    })
    .then(function (data) {
        //console.log(data); <--- con este log, veo en que formato me vienen los datos para trabajar con ellos
        //trabajo con los datos
        data.forEach(element => {
            let nuevoTr=document.createElement("tr");
            let tdArticulo=document.createElement("td");
            let tdDescripcion=document.createElement("td");
            let tdprecio=document.createElement("td");
            tdArticulo.textContent=element['id_articulo'];
            tdDescripcion.textContent=element['descripcion'];
            tdprecio.textContent=element['precio_unitario'];
            nuevoTr.appendChild(tdArticulo);
            nuevoTr.appendChild(tdDescripcion);
            nuevoTr.appendChild(tdprecio);
            let tbody=document.querySelector('tbody');
            tbody.appendChild(nuevoTr);
        });
    });
}
