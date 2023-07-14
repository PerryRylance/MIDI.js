import ControlEvent from "./ControlEvent";
import ReadStream from "../../streams/ReadStream";
import WriteStream from "../../streams/WriteStream";
export default abstract class NoteEvent extends ControlEvent {
    key: number;
    velocity: number;
    readBytes(stream: ReadStream): void;
    writeBytes(stream: WriteStream): void;
}
