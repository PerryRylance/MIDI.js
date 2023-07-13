import Event from "./Event";
import ReadStream from "../ReadStream";
export default abstract class ArbitraryLengthEvent extends Event {
    private unknownLength;
    private unknownBytes;
    readBytes(stream: ReadStream): void;
}
