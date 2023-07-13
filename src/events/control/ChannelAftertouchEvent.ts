import ReadStream from "../../ReadStream";
import ControlEvent from "./ControlEvent";

export default class ChannelAftertouchEvent extends ControlEvent
{
	private pressure: number = 127;

	readBytes(stream: ReadStream): void
	{
		this.pressure = stream.readByte();
	}
}