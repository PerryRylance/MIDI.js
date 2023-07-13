import ReadStream from "../../ReadStream";
import MetaEvent from "./MetaEvent";
export default class PortPrefixEvent extends MetaEvent {
    private port;
    readBytes(stream: ReadStream): void;
}
