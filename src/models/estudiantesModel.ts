import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

//Como la clase estudiante va a ser una entidad se necesita que use el decorador y entitiy como lo describe la documentación
// Esta sería la primera tabla construida con typescript

@Entity('estudiantes')
export class Estudiantes extends BaseEntity {
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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}