import { Injectable } from "@nestjs/common";
import * as fs from 'fs';
import { config } from '../config'
import { User } from './user.module'
import { DatabaseService } from "./database.service";

@Injectable()
export class UsersService {
   constructor(private readonly databaseService: DatabaseService) {}

   get() {
      // try {
      //       //    const users = fs.readFileSync(config.usersPath, 'utf8');
      //       //    if (!users) {
      //       //        return [];
      //       //    }
      //       //    return JSON.parse(users)
      //       // } catch (err) {
      //       //    return err.message;
      //       // }
      const result = this.databaseService.getUsers()
   }
}

