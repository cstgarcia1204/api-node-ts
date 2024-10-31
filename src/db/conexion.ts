import { DataSource } from "typeorm";
import { Estudiantes } from "../models/estudiantesModel";
import { Profesores } from "../models/profesoresModel";
import { Cursos } from "../models/cusrosModel";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Balundre87#',
    database: 'cursos',
    logging: true,
    entities: [Estudiantes, Profesores, Cursos],
    synchronize: false,
});