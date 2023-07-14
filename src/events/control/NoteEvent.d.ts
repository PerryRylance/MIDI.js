import ControlEvent from "./ControlEvent";
import ReadStream from "../../streams/ReadStream";
import WriteStream from "../../streams/WriteStream";
export default abstract class NoteEvent extends ControlEvent {
    private _key;
    private _velocity;
    get key(): number;
    set key(value: number);
    get velocity(): number;
    set velocity(value: number);
    readBytes(stream: ReadStream): void;
    writeBytes(stream: WriteStream): void;
}
