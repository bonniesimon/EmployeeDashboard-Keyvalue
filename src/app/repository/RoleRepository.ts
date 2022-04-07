import { getConnection, Repository } from "typeorm";
import { Role } from "../entities/Role";

export class RoleRepository extends Repository<Role>{
    public async createRole(RoleDetails: Role){
        const roleConnection = getConnection().getRepository(Role);
        const savedDetails = roleConnection.save(RoleDetails);
        return savedDetails;
    }

    public async getAllRoles(){
        const roleConnection = getConnection().getRepository(Role);
        const data = roleConnection.findAndCount();
        return data;
    }

    public deleteRoleById = async (roleId: string) => {
        const roleConnection = getConnection().getRepository(Role);
        const data = roleConnection.softDelete(roleId);
        return data;
    }

    public upddateRoleDetails = async (roleId: string, roleName: string) => {
        const roleConnection = getConnection().getRepository(Role);
        const data = roleConnection.update({rid: roleId, deletedAt: null}, {rid: roleId, roleName: roleName});
        return data;
    }
}