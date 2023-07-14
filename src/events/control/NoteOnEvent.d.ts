import ReadStream from "../../streams/ReadStream";
import ControlEvent from "./ControlEvent";
export default class NoteOnEvent extends ControlEvent {
    key: number;
    velocity: number;
    readBytes(stream: ReadStream): void;
}
