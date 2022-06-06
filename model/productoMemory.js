export default class persistenciaMemory {
    static instancia

    constructor (){
        if(!persistenciaMemory.instancia) {
            this.productos = [];
            persistenciaMemory.instancia = this;
            console.log('Persistencia en memoria');
        } else {
            console.log('Ya se ha utilizado esta persistencia');
            return persistenciaMemory.instancia;
        }
    }

    obtenerProductos = async () => {
        return this.productos
    }

    agregarProducto = async (producto) => {
        this.productos.push(producto);
    }
}