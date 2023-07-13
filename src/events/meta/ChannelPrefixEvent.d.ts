import ReadStream from "../../ReadStream";
import MetaEvent from "./MetaEvent";
export default class ChannelPrefixEvent extends MetaEvent {
    private channel;
    readBytes(stream: ReadStream): void;
}
