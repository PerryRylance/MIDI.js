import Event, { EventType } from "../Event";

export enum ControlEventType {
	NOTE_OFF			= 0x80,
	NOTE_ON				= 0x90,

	AFTERTOUCH			= 0xA0,
	KEY_PRESSURE		= 0xA0,

	CONTROLLER			= 0xB0,
	PROGRAM_CHANGE		= 0xC0,

	CHANNEL_AFTERTOUCH	= 0xD0,
	CHANNEL_PRESSURE	= 0xD0,

	PITCH_WHEEL			= 0xE0
};

export default abstract class ControlEvent extends Event
{
	protected channel: number = 0;

	constructor(delta: number = 0, channel: number = 0)
	{
		super(EventType.CONTROL, delta);

		this.channel = channel;
	}
}