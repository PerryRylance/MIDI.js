import Event from "./events/Event";
import ReadStream from "./ReadStream";
import { StatusBytes } from "./StatusBytes";
export default class EventFactory {
    static fromStream(stream: ReadStream, status: StatusBytes): Event;
}
