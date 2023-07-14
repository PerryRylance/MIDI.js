import ReadStream from "../../streams/ReadStream";
import ControlEvent from "./ControlEvent";
export default class PitchWheelEvent extends ControlEvent {
    value: number;
    readBytes(stream: ReadStream): void;
    get amount(): number;
    set amount(floating: number);
}
