import ReadStream from "../../streams/ReadStream";

import ControlEvent from "./ControlEvent";

export default class NoteOffEvent extends ControlEvent
{
	private key: number = 60;
	private velocity: number = 127;

	readBytes(stream: ReadStream): void 
	{
		this.key = stream.readByte();
		this.velocity = stream.readByte();
	}
}