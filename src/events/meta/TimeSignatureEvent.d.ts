import MetaEvent from "./MetaEvent";
import ReadStream from "../../ReadStream";
export default class TimeSignatureEvent extends MetaEvent {
    private numerator;
    private denominator;
    private ticksPerMetronomeClick;
    private num32ndNotesPerBeat;
    readBytes(stream: ReadStream): void;
}
