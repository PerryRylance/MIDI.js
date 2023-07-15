import ReadStream from "./streams/ReadStream";
import WriteStream from "./streams/WriteStream";
export default class File {
    private tracks;
    private format;
    private timeDivision;
    private readHeader;
    readBytes(stream: ReadStream): void;
    writeBytes(stream: WriteStream): void;
}
