import ReadStream from "./ReadStream";
import { StatusBytes } from "./StatusBytes";
import ControlEvent from "./events/control/ControlEvent";
export default class ControlEventFactory {
    static fromStream(stream: ReadStream, leading: number, delta: number, status: StatusBytes): ControlEvent;
}
