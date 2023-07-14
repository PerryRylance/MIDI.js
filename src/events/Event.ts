import ReadStream from "../streams/ReadStream";

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
	// abstract toString(): string;
}