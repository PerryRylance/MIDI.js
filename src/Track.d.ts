import ReadStream from "./streams/ReadStream";
import Event from "./events/Event";
export default class Track {
    events: Event[];
    readBytes(stream: ReadStream): void;
}
