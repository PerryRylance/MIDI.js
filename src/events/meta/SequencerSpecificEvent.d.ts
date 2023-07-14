import ReadStream from "../../streams/ReadStream";
import MetaEvent from "./MetaEvent";
export default class SequencerSpecificEvent extends MetaEvent {
    private unknownLength;
    private unknownBytes;
    readBytes(stream: ReadStream): void;
}
