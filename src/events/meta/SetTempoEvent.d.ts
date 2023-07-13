import MetaEvent from "./MetaEvent";
import ReadStream from "../../ReadStream";
export default class SetTempoEvent extends MetaEvent {
    private mspqn;
    get bpm(): number;
    set bpm(value: number);
    readBytes(stream: ReadStream): void;
}
