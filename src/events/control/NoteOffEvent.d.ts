import ReadStream from "../../ReadStream";
import ControlEvent from "./ControlEvent";
export default class NoteOffEvent extends ControlEvent {
    private key;
    private velocity;
    readBytes(stream: ReadStream): void;
}
