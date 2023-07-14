import ReadStream from "../../streams/ReadStream";
import MetaEvent, { MetaEventType } from "./MetaEvent";
export default class KeySignatureEvent extends MetaEvent {
    private accidentals;
    private quality;
    readBytes(stream: ReadStream): void;
    protected getMetaType(): MetaEventType;
}
