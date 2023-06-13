export default interface Reservation {
    id?: number,
    createdAt?: string,
    flightId?: number,
    seatId?: number,
    adult?: boolean,
    name?: string,
    surname?: string,
    citizenship?: string,
    gender?: string,
}