class articulo{
    constructor(codigo,nombre,precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;
    }

    get codigo(){
        return this._codigo;
    }
    
    get precio(){
        return this._precio;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }
    set codigo(codigo){
        this._codigo=codigo;
    }

    set precio(precio){
        this._precio=precio;
    }

}
class carro extends articulo{
    constructor(nombre,precio,cantidad){
        super(nombre);
        super(precio);
        this.cantidad=cantidad;
    }

    get cantidad(){
        return this._cantidad;
    }
    set cantidad(cantidad){
        this._cantidad=cantidad;
    }
    totalSinIVAunitario(){
        return this._precio*this._cantidad;
    }
    totalsinIVA(arraytotalesSinIva,articulo){
        arraytotalesSinIva.push(articulo);
        let total=0;
        arraytotalesSinIva.forEach(element => {
            total+=element.totalSinIVAunitario();
        });
        return total;
    }
}