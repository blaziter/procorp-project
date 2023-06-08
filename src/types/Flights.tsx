import Props from "./Props";
import Seat from "./Seats";

export default interface FlightsProps extends Props {
    id?: number,
    title?: string,
    from?: string,
    to?: string,
    departure?: string,
    arrival?: string,
    duration?: string,
    price?: number,
    seats?: Seat[],
}