import ReadStream from "../../streams/ReadStream";
import MetaEvent from "./MetaEvent";
import DeviceManufacturer from "../../DeviceManufacturer";
export default class SequencerSpecificEvent extends MetaEvent {
    manufacturer: DeviceManufacturer;
    bytes: Uint8Array;
    readBytes(stream: ReadStream): void;
}
