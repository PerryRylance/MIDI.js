import ReadStream from "./ReadStream";
export default class File {
    private tracks;
    private format;
    private timeDivision;
    private readHeader;
    readBytes(stream: ReadStream): void;
}
