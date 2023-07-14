import ReadStream from "../../streams/ReadStream";
import MetaEvent from "./MetaEvent";
export default class ChannelPrefixEvent extends MetaEvent {
    channel: number;
    readBytes(stream: ReadStream): void;
}
