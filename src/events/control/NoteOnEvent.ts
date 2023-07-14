import ReadStream from "../../streams/ReadStream";

import ControlEvent from "./ControlEvent";

export default class NoteOnEvent extends ControlEvent
{
	key: number = 60;
	velocity: number = 127;

	// TODO: Status doesn't need passing to readBytes
	readBytes(stream: ReadStream): void 
	{
		this.key = stream.readByte();
		this.velocity = stream.readByte();
	}
}