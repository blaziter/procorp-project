export default interface Reservation {
    id?: number,
    flightId?: number,
    seatId?: number,
    createdAt?: string,
    adult?: boolean,
    name?: string,
    surname?: string,
    state?: string,
    gender?: string,
    birthday?: string,
}