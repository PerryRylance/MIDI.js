import ReadStream from "../../ReadStream";
import ControlEvent from "./ControlEvent";
export default class ChannelAftertouchEvent extends ControlEvent {
    private pressure;
    readBytes(stream: ReadStream): void;
}
