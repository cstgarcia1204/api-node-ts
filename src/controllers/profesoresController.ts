import { Request, Response } from "express";
import { Profesores } from "../models/profesoresModel";

//Se van a implementar los controladores usando el paradigma de programación orientada a objetos
class ProfesoresController {
    constructor () {

    }
    //métodos de Profesores Controller

    //GET general
    async consultar(req:Request, res: Response) { //dado que es typescript todo es tipado 
        try {
            const data = await Profesores.find();
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
            const registro = await Profesores.findOneBy({id : Number(id)});
            if(!registro) { //sino hay registro
                throw new Error('Profesor no encontrado');    
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
            const registro = await Profesores.save(req.body);
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
            
            const registro = await Profesores.findOneBy({id: Number(id)});
            if(!registro) { //sino hay registro
                throw new Error('Profesor no encontrado');    
            }
            await Profesores.update({id: Number(id)}, req.body);
            const registroActualizado = await Profesores.findOneBy({id: Number(id)});
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
            const registro = await Profesores.findOneBy({id: Number(id)});
            if(!registro) { //sino hay registro
                throw new Error('Profesor no encontrado');    
            }
            await Profesores.delete({id: Number(id)}); //delete lleva solo un parametro que es buscar el elemento por su clave
            res.status(204);
        } catch (err) {
            if(err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    };
}

export default new ProfesoresController();
