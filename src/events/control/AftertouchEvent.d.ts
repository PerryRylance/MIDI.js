import ReadStream from "../../streams/ReadStream";
import ControlEvent from "./ControlEvent";
export default class AftertouchEvent extends ControlEvent {
    private key;
    private pressure;
    readBytes(stream: ReadStream): void;
}
