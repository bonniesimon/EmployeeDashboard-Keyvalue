import { Response, NextFunction, response } from "express";
import APP_CONSTANTS from "../constants";
import { RoleService } from "../services/RoleService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";

class RoleController extends AbstractController{
    constructor(private roleService: RoleService){
        super(`${APP_CONSTANTS.apiPrefix}/roles`);
        this.initializeRoutes();
    };

    protected initializeRoutes(): void {
        this.router.post(
            `${this.path}/`,
            this.asyncRouteHandler(this.createRole)
        );

        this.router.get(
            `${this.path}/`,
            this.asyncRouteHandler(this.getAllRoles)
        );

        this.router.delete(
            `${this.path}/:id`,
            this.asyncRouteHandler(this.deleteRoleById)
        );

        this.router.put(
            `${this.path}/:id`,
            this.asyncRouteHandler(this.updateRoleById)
        );
    }

    private createRole = async (request: RequestWithUser, response: Response, next: NextFunction) => {
        try {
            const data = await this.roleService.createRole(request.body);
            response.status(201).send(
                this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
            );
        } catch (err: any) {
            next(err); 
        }
    };

    private getAllRoles = async ( request: RequestWithUser, response: Response, next: NextFunction) => {
        try {
           const data = await this.roleService.getAllRoles(); 
           response.status(200).send(
               this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
           );
        } catch (error: any) {
            next(error); 
        }
    }

    private deleteRoleById = async (request: RequestWithUser, response: Response, next: NextFunction) => {
        try {
           const data = await this.roleService.deleteRoleById(request.params.id); 
           response.send(
               this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
           );
        } catch (error: any) {
            next(error); 
        }
    }

    private updateRoleById = async (request: RequestWithUser, response: Response, next: NextFunction) => {
        try {
           const data = await this.roleService.updateRoleById({roleId: request.params.id, roleName: request.body.roleName});
           response.status(200).send(
               this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
           )
        } catch (error: any) {
           next(error); 
        }
    }

}

export default RoleController;