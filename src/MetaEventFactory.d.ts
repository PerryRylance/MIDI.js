import ReadStream from "./ReadStream";
import { StatusBytes } from "./StatusBytes";
import MetaEvent from "./events/meta/MetaEvent";
export default class MetaEventFactory {
    static fromStream(stream: ReadStream, delta: number, status: StatusBytes): MetaEvent;
}
