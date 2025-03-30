import { CanActivate, ExecutionContext, HttpException } from "@nestjs/common";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";

export class BlockGuard implements CanActivate{
    async canActivate(context: ExecutionContext):Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const isBlocked = request.user?.isBlocked;

        if(isBlocked===true) {
throw new HttpException('You are blocked',403)
        }
        return true;
        
    }
    
}