import ReadStream from "../../streams/ReadStream";
import WriteStream from "../../streams/WriteStream";
import ControlEvent from "./ControlEvent";
export default class AftertouchEvent extends ControlEvent {
    key: number;
    pressure: number;
    readBytes(stream: ReadStream): void;
    writeBytes(stream: WriteStream): void;
    protected getTypeHibyte(): number;
}
