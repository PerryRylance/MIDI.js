import ReadStream from "../streams/ReadStream";
import WriteStream from "../streams/WriteStream";

export enum EventType {
	CONTROL = 0,
	SYSEX = 0xF0,
	META = 0xFF
};

export default abstract class Event
{
	readonly delta: number = 0;

	constructor(delta: number = 0)
	{
		this.delta = delta;
	}

	abstract readBytes(stream: ReadStream): void;
	protected abstract writeType(stream: WriteStream): void;
	
	writeBytes(stream: WriteStream): void
	{
		stream.writeVLV(this.delta);
		this.writeType(stream);
	}


	// abstract toString(): string;
}