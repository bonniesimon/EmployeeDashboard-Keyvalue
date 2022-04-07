import { plainToClass } from "class-transformer";
import { Role } from "../entities/Role";
import HttpException from "../exception/HttpException";
import { RoleRepository } from "../repository/RoleRepository";

export class RoleService{
    constructor(private roleRepository: RoleRepository){}

    public createRole = async (roleInput: any) => {
        try{
            const newRole = plainToClass(Role, {
                roleName: roleInput.roleName
            })

            const saveRole = await this.roleRepository.createRole(newRole);
            return saveRole;
        }
        catch(err: any) {
            throw new HttpException(400, "Failed to create role");
        }
    }

    public getAllRoles = async () => {
        try{
            const roles = await this.roleRepository.getAllRoles();
            return roles;
        }catch(err: any){
            throw new HttpException(400, "Failed to fetch roles");
        }
    }
    
    public deleteRoleById = async (roleId: string) => {
        try {
           const deletedRole = await this.roleRepository.deleteRoleById(roleId); 
           return deletedRole;
        } catch (error:any) {
            throw new HttpException(400, "Failed to delete");
        }
    }

    public updateRoleById = async (roleDetails: any) => {
        try {
           const updatedRole = await this.roleRepository.upddateRoleDetails(roleDetails.roleId, roleDetails.roleName); 
           return updatedRole;
        } catch (error: any) {
           throw new HttpException(400, "Failed to update");
        }
    }
}