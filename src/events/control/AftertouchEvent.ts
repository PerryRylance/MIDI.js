import ReadStream from "../../streams/ReadStream";

import ControlEvent from "./ControlEvent";

export default class AftertouchEvent extends ControlEvent
{
	key: number = 60;
	pressure: number = 127;

	readBytes(stream: ReadStream): void
	{
		this.key = stream.readByte();
		this.pressure = stream.readByte();
	}
}