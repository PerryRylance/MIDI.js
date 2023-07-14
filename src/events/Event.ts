import ReadStream from "../streams/ReadStream";

export enum EventType {
	CONTROL = 0,
	SYSEX = 0xF0,
	META = 0xFF
};

export default abstract class Event
{
	readonly type: EventType = EventType.CONTROL;
	readonly delta: number = 0;

	constructor(type: EventType, delta: number = 0)
	{
		this.type = type; // TODO: Do we need this any more?
		this.delta = delta;
	}

	abstract readBytes(stream: ReadStream): void;
	// abstract toString(): string;
}