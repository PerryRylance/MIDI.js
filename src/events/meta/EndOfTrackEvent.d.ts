import ReadStream from "../../streams/ReadStream";
import MetaEvent from "./MetaEvent";
export default class EndOfTrackEvent extends MetaEvent {
    readBytes(stream: ReadStream): void;
}
