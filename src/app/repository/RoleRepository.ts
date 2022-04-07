import { getConnection, Repository } from "typeorm";
import { Role } from "../entities/Role";

export class RoleRepository extends Repository<Role>{
    public async createRole(RoleDetails: Role){
        const roleConnection = getConnection().getRepository(Role);
        const savedDetails = roleConnection.save(RoleDetails);
        return savedDetails;
    }
}