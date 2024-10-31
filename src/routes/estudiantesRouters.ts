import  express from 'express';
import estudiantesController from '../controllers/estudiantesController'; //qui va sin extensión la rutak

//instanciamos solamente el segmento de gestión de rutas
const router = express.Router();

//get estudiantes
router.get('/', estudiantesController.consultar);

//post estudiantes
router.post('/', estudiantesController.ingresar);

// path --> id ( cualquir ruta que pase por id)
router.route('/:id')
    //get 1 estudiante
    .get(estudiantesController.consultarDetalle)
    //put estudiantes
    .put(estudiantesController.actualizar)
    //delete 1 estudiantes
    .delete(estudiantesController.borrar);


export default router; // exportación de ecma script


/*
NOTAS:
    Router tiene la función route que se implementa routes.route('/:id')
    y se le pasa la ruta que queremos especificar, para que no sea repetitiva
    y para que tenga mayor legibilidad y usamos chaining notation

*/