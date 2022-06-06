import persistenciaMemory from './productoMemory.js'
import persistenciaFileSystem from './productoFileSystem.js'
import persistenciaMongo from './productoMongoDB.js'

/* -------------------------------------- */
/*                FACTORY                 */
/* -------------------------------------- */
class FactoryPersonaModel {
    static set(opcion) {
        console.log('**** PERSISTENCIA SELECCIONADA **** [' + opcion + ']')
        switch(opcion) {
            case 'Mem': return new persistenciaMemory()
            case 'File': return new persistenciaFileSystem()
            case 'Mongo': return new persistenciaMongo()
        }
    }
}

const opcion = process.argv[3] || 'Mem'
export default FactoryPersonaModel.set(opcion)
