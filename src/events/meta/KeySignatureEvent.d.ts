import ReadStream from "../../ReadStream";
import MetaEvent from "./MetaEvent";
export default class KeySignatureEvent extends MetaEvent {
    private accidentals;
    private quality;
    readBytes(stream: ReadStream): void;
}
