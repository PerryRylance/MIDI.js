import ReadStream from "../../ReadStream";
import ControlEvent from "./ControlEvent";
export default class NoteOnEvent extends ControlEvent {
    private key;
    private velocity;
    readBytes(stream: ReadStream): void;
}