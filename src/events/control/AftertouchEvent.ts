import ReadStream from "../../streams/ReadStream";
import WriteStream from "../../streams/WriteStream";

import ControlEvent, { ControlEventType } from "./ControlEvent";

export default class AftertouchEvent extends ControlEvent
{
	key: number = 60;
	pressure: number = 127;

	readBytes(stream: ReadStream): void
	{
		this.key = stream.readByte();
		this.pressure = stream.readByte();
	}

	writeBytes(stream: WriteStream): void
	{
		super.writeBytes(stream);

		stream.writeByte(this.key);
		stream.writeByte(this.pressure);
	}

	protected getTypeHibyte(): number
	{
		return ControlEventType.AFTERTOUCH;
	}
}