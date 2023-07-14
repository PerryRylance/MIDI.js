import ReadStream from "../../streams/ReadStream";
import WriteStream from "../../streams/WriteStream";
import ControlEvent from "./ControlEvent";
export default class ChannelAftertouchEvent extends ControlEvent {
    pressure: number;
    readBytes(stream: ReadStream): void;
    writeBytes(stream: WriteStream): void;
    protected getTypeHibyte(): number;
}
