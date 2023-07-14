import ReadStream from "../../streams/ReadStream";
import ControlEvent from "./ControlEvent";
export default class ChannelAftertouchEvent extends ControlEvent {
    pressure: number;
    readBytes(stream: ReadStream): void;
}
