import MetaEvent, { MetaEventType } from "./MetaEvent";
import ReadStream from "../../streams/ReadStream";
export default class TimeSignatureEvent extends MetaEvent {
    private numerator;
    private denominator;
    private ticksPerMetronomeClick;
    private num32ndNotesPerBeat;
    readBytes(stream: ReadStream): void;
    protected getMetaType(): MetaEventType;
}
