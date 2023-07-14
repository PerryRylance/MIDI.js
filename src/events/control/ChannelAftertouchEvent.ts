import ReadStream from "../../streams/ReadStream";
import WriteStream from "../../streams/WriteStream";
import ControlEvent, { ControlEventType } from "./ControlEvent";

export default class ChannelAftertouchEvent extends ControlEvent
{
	pressure: number = 127;

	readBytes(stream: ReadStream): void
	{
		this.pressure = stream.readByte();
	}

	writeBytes(stream: WriteStream): void
	{
		super.writeBytes(stream);

		stream.writeByte(this.pressure);
	}

	protected getTypeHibyte(): number
	{
		return ControlEventType.CHANNEL_AFTERTOUCH;
	}
}