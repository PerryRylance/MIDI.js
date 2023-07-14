import ReadStream from "../../streams/ReadStream";
import ControlEvent from "./ControlEvent";
export default class NoteOffEvent extends ControlEvent {
    key: number;
    velocity: number;
    readBytes(stream: ReadStream): void;
}
