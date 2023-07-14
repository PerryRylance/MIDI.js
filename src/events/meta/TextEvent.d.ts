import ReadStream from "../../streams/ReadStream";
import MetaEvent from "./MetaEvent";
export default class TextEvent extends MetaEvent {
    text: string;
    readBytes(stream: ReadStream): void;
}
