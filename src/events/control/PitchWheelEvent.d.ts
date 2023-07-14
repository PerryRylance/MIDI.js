import ReadStream from "../../streams/ReadStream";
import ControlEvent from "./ControlEvent";
export default class PitchWheelEvent extends ControlEvent {
    value: number;
    readBytes(stream: ReadStream): void;
    protected getTypeHibyte(): number;
    get amount(): number;
    set amount(floating: number);
}
