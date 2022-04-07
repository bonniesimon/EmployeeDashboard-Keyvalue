import { NextFunction, Response } from "express"
import RequestWithUser from "../util/rest/request"
import jsonwebtoken from "jsonwebtoken";
import UserNotAuthorizedException from "../exception/UserNotAuthorizedException";
import APP_CONSTANTS from "../constants"

const validRoles = ["Developer", "QA"];

const authorize = () => {
    return async (
        req: RequestWithUser,
        res: Response,
        next: NextFunction
    ) => {
        try{
            
            const token = getTOkenFromRequestHeader(req);
            jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
            const payload: any= jsonwebtoken.decode(token);
            console.log(payload);
            const isRolePresent: boolean = validRoles.includes(payload.role);
            if(!isRolePresent){
                throw new Error("user role not valid");
            }
            return next();
        }catch (error: any){
            console.log(error);
            return next(new UserNotAuthorizedException());
        }
    }
};

const getTOkenFromRequestHeader = (req: RequestWithUser) => {
    const tokenWithBearerHeader = req.header(`${APP_CONSTANTS.authorizationHeader}`);

    if(tokenWithBearerHeader){
        return tokenWithBearerHeader.replace(`${APP_CONSTANTS.bearer} `, '');
    }

    return "";
}

export default authorize;