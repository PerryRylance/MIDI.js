import ReadStream from "../../streams/ReadStream";
import MetaEvent from "./MetaEvent";
export default class PortPrefixEvent extends MetaEvent {
    port: number;
    readBytes(stream: ReadStream): void;
}
