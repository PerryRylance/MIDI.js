import ReadStream from "../streams/ReadStream";
export declare enum EventType {
    CONTROL = 0,
    SYSEX = 240,
    META = 255
}
export default abstract class Event {
    readonly type: EventType;
    readonly delta: number;
    constructor(type: EventType, delta?: number);
    abstract readBytes(stream: ReadStream): void;
}
