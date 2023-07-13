import ReadStream from "../../ReadStream";
import MetaEvent from "./MetaEvent";
export default class SmtpeOffsetEvent extends MetaEvent {
    private rate;
    private minutes;
    private seconds;
    private frames;
    private subframes;
    readBytes(stream: ReadStream): void;
}
