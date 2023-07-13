import ReadStream from "../../ReadStream";
import ControlEvent from "./ControlEvent";
export default class PitchWheelEvent extends ControlEvent {
    private value;
    readBytes(stream: ReadStream): void;
    get amount(): number;
    set amount(floating: number);
}
