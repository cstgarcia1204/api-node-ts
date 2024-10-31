import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, BaseEntity} from "typeorm";
import { Profesores } from "./profesoresModel";
import { Estudiantes } from "./estudiantesModel";

@Entity('cursos') // Dentro de la entidad va el nombre de la tabla
export class Cursos extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: String;

    @Column('text')
    descripcion: String;

    //Para llevar el login de las operaciones, cuando se creó el registro y cuando se actualizo
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

     //Creando la relación de la tabla cursos muchos a uno
     @ManyToOne(() => Profesores, (profesor) => profesor.cursos)
     //Para crear la tabla de relacionamiento que qen SQL sería profesor_id aqui se crea en automático cuando se declara con el decorador
     //con JoinColumn crea la columna de relacionamientop
     @JoinColumn({name:'profesor_id'}) // el nombre personalizado dentro del parametro de los decoradores para modificar comportamientos y customizaciones en este caso el nombre de la tabla que relaciona los campos 
     profesor: Profesores;


     //Creando la relacion cursos - estudiantes Muchos a muchos
     //como no tiene la propiedad definida entonces se tiene que hacer la tabla porque es de muchos a muchos y setear las propiedades de la tabla para que no las defina en automatico
     @ManyToMany(()=> Estudiantes)
     @JoinTable({
        name: 'cursos_estudiantes',
        //de la tabla origen (joincolumn) se llame curso_id
        joinColumn: ({name: 'curso_id'}),
        //Y la tabla destino (inversejoinColumn) se lame estudiante_id
        inverseJoinColumn: ({name: 'estudiante_id'})
     })
     estudiantes: Estudiantes[]; //hay estudiante de tipo un arreglo de estudiantes
}