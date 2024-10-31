import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, BaseEntity } from "typeorm";
import { Cursos } from "./cusrosModel";

@Entity('profesores')
export class Profesores extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dni: String;

    @Column()
    nombre: String;

    @Column()
    apellido: String;

    @Column()
    email: String;

    @Column()
    profesion: String;

    @Column()
    telefono: String;

    //Para llevar el login de las operaciones, cuando se creó el registro y cuando se actualizo
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    //Creando la relación de profesor a cursos Uno a muchos
     //Estableciendo la relación de las tablas
     @OneToMany(() => Cursos, (curso) => curso.profesor)
     cursos: Cursos[]

}