import Event from "./Event";
import ReadStream from "../streams/ReadStream";
export default abstract class ArbitraryLengthEvent extends Event {
    private unknownLength;
    private unknownBytes;
    readBytes(stream: ReadStream): void;
}
