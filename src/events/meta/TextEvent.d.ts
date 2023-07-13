import ReadStream from "../../ReadStream";
import MetaEvent from "./MetaEvent";
export default class TextEvent extends MetaEvent {
    private text;
    readBytes(stream: ReadStream): void;
}
