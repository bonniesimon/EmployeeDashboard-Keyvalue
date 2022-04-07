import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity("role")
export class Role extends AbstractEntity{
    @PrimaryGeneratedColumn("uuid")
    public rid: string;

    @Column({nullable: false})
    public roleName: string;
}
