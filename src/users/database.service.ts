import { Injectable } from "@nestjs/common";
import * as sqlite3 from 'sqlite3';

@Injectable()
export class DatabaseService {
    private readonly db: sqlite3.Database

    constructor() {
        this.db = new sqlite3.Database('/Users/lia/Desktop/data', (err) => {
            if (err){
                console.log(err.message, '!!!')
            } else{
                console.log('connected!!!')
            }
        })
    }

    getUsers(){
       return {};
    }
}















