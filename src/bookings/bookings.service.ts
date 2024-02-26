import { Injectable } from "@nestjs/common";
import * as fs from 'fs';
import { config } from '../config'
import { Booking } from './booking.module'
@Injectable()
export class BookingsService {
    create(){

    }

    get (){
      try {
        const bookData = fs.readFileSync(config.bookingsPath, 'utf-8');
        return bookData ? bookData?.length : [];
      } catch (err) {
        return err.message()
      }
    }
}

