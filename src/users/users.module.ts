import { Module } from "@nestjs/common";
import { UsersControllers } from "./users.controller";
import { UsersService } from "./users.service";
import { DatabaseService } from "./database.service"

@Module({
    controllers: [UsersControllers],
    providers: [UsersService, DatabaseService]
})
export class UsersModule {}

