import { Request, Response } from "express";
import { Estudiantes } from "../models/estudiantesModel";

//Se van a implementar los controladores usando el paradigma de programación orientada a objetos
class EstudiantesController {
    constructor () {

    }
    //métodos de Estudiantes Controller

    //GET general
    async consultar(req:Request, res: Response) { //dado que es typescript todo es tipado 
        try {
            //Aquí se llama al modelo de Estudiantes - Las operaciones se harán a través de los modelos
            //esta usando BaseEntity y en este caso find trae todos los datos de la tabla
            //Por ser una base de datos sabemos que es de tipo asíncrona, ppor ello se le debe de agregar await
            //y retorna una data la cual seteamos status y mandamos la data como json
            const data = await Estudiantes.find();
            res.status(200).json(data);
        } catch (err) {
            if(err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    //GET particular
    async consultarDetalle(req: Request, res: Response) {
        const {id} = req.params;
        try {
            const registro = await Estudiantes.findOneBy({id : Number(id)});
            if(!registro) { //sino hay registro
                throw new Error('Estudiante no encontrado');    
            }
            res.status(200).json (registro)
        } catch (err) {
            if(err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    //POST
    async ingresar(req: Request, res: Response) {
        try {
            //Manera inicial para checar que servidor corra correctamente
            // res.send('Ingresar');
            const registro = await Estudiantes.save(req.body);
            res.status(200).json(registro);
        } catch (err) {
            if(err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    //PUT
    async actualizar(req: Request, res: Response) {
        // res.json({msg: 'Actualización de estudiante'});
        const {id} = req.params;
        try {
            //manera incial para checar que servidor corra corectamente
            // res.send('Actualizar');
            
            const registro = await Estudiantes.findOneBy({id: Number(id)});
            if(!registro) { //sino hay registro
                throw new Error('Estudiante no encontrado');    
            }
            await Estudiantes.update({id: Number(id)}, req.body);
            const registroActualizado = await Estudiantes.findOneBy({id: Number(id)});
            res.status(200).json(registroActualizado);
        } catch (err) {
            if(err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    };

    //DELETE
    async borrar(req: Request, res: Response) {
        // res.json({msg: 'Actualización de estudiante'});
        const {id} = req.params;
        try {
            const registro = await Estudiantes.findOneBy({id: Number(id)});
            if(!registro) { //sino hay registro
                throw new Error('Estudiante no encontrado');    
            }
            await Estudiantes.delete({id: Number(id)}); //delete lleva solo un parametro que es buscar el elemento por su clave
            res.status(204);
        } catch (err) {
            if(err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    };
}

export default new EstudiantesController();


/*
NOTAS: Todos los metodos llevan 2 parámetros request y response
al principio la definición son métodos asíncronos pero 
se espera que se conviertan en métodos asíncronos

Express comunica los datos de 4 maneras 
    + en el body (que es el payload que se envía en json)
    + como params en las rutas
    + con query string, con pares de clave=valor
    + enviarlos por el header, generalmente eso contiene formatos de autenticación o parámetros de definición de tipo de datos, no se mandan datos como tal

    */