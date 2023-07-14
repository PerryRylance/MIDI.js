import ReadStream from "../../streams/ReadStream";
import ControlEvent from "./ControlEvent";
export default class AftertouchEvent extends ControlEvent {
    key: number;
    pressure: number;
    readBytes(stream: ReadStream): void;
}
