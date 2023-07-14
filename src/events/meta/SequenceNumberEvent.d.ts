import ReadStream from "../../streams/ReadStream";
import MetaEvent from "./MetaEvent";
export default class SequenceNumberEvent extends MetaEvent {
    private number;
    readBytes(stream: ReadStream): void;
}
