import app from './app';
import { AppDataSource } from "./db/conexion";

//se crea la funcion principal porque la conexión a la base de datos es de tipo asíncrona
//en el primer nivel no puede estar la función asíncrona de la conexión a la bd, se tiene que envolver la funcion con el main, porque javascript no puede esperarla
// como se tiene que usar async await porque es una promesa es poer eso que se envolvio la conexion en el main
async function main () {
    try {
        //inicializar la conexión
        await AppDataSource.initialize();
        console.log('base de datos conectada');
        app.listen(6505, () => {
        console.log('Server activo');
        });
    } catch (err) {
        if( err instanceof Error) {
            console.log(err.message);
        }
    }
}


main();
