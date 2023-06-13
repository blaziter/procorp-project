import Reservation from "./Reservation";

export default interface Booker extends Reservation {
    birthday?: string,
    state?: string,
    email?: string,
    phone?: string,
    street?: string,
    city?: string,
    zip?: string,
}