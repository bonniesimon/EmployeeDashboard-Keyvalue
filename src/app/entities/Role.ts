import { Column, PrimaryColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

class Role extends AbstractEntity{
    @PrimaryColumn("uuid")
    public id: string;

    @Column({nullable: false})
    public roleName: string;
}

export {Role};