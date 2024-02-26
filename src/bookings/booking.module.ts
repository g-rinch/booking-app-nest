export interface Booking {
    id: number,
    start_date: Date,
    end_date: Date,
    members: string[],
    booker: string
}