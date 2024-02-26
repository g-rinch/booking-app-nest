import { Controller, Get, Post } from "@nestjs/common";
import { BookingsService } from "./bookings.service";

@Controller ('booking')
export class BookingsController {
    constructor(private readonly bookingsService: BookingsService) {}
    @Get()
    getBookings(){

    }
}