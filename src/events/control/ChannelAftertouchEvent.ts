import ReadStream from "../../streams/ReadStream";
import ControlEvent from "./ControlEvent";

export default class ChannelAftertouchEvent extends ControlEvent
{
	pressure: number = 127;

	readBytes(stream: ReadStream): void
	{
		this.pressure = stream.readByte();
	}
}