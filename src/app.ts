//app.ts es el encargado de la aplicación
import  express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import estudiantesRoutes from './routes/estudiantesRouters';
import profesoresRoutes from './routes/profesoresRouters';
import crursosRoutes from './routes/cursosRouters';
const  app = express();

//Usando middlewares
app.use(express.json())
app.use(morgan('dev')); //para la parte del login
app.use(cors()); // para la seguridad, con cors se puede restringir quien nos puede consultar

app.get('/', (req: Request, res: Response) => {
    console.log('Hola mundo');
    res.send('Server activo')
});

//Aqui en este middleware use se define el nombre de estudiantesRouters
app.use('/estudiantes', estudiantesRoutes);

//middleware use para definir nombre de profesores
app.use('/profesores', profesoresRoutes);

//middleware use para definir noombre de cursos
app.use('/cursos', crursosRoutes);

export default app;