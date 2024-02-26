import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { DatabaseService } from './database.service'
@Controller ('users')
export class UsersControllers {
   constructor(private readonly usersService: UsersService) {}

   @Get()
   getUsers(){
       return this.usersService.get();
   }
}







