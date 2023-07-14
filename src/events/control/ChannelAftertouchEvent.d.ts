import ReadStream from "../../streams/ReadStream";
import WriteStream from "../../streams/WriteStream";
import ControlEvent from "./ControlEvent";
export default class ChannelAftertouchEvent extends ControlEvent {
    private _pressure;
    get pressure(): number;
    set pressure(value: number);
    readBytes(stream: ReadStream): void;
    writeBytes(stream: WriteStream): void;
    protected getTypeHibyte(): number;
}
