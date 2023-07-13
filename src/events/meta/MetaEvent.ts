import Event, { EventType } from "../Event";

export enum MetaEventType {
	SEQUENCE_NUMBER		= 0x00,
	TEXT				= 0x01,
	COPYRIGHT			= 0x02,
	TRACK_NAME			= 0x03,
	INSTRUMENT_NAME		= 0x04,
	LYRIC				= 0x05,
	MARKER				= 0x06,
	CUE_POINT			= 0x07,
	CHANNEL_PREFIX		= 0x20,
	PORT_PREFIX			= 0x21,
	END_OF_TRACK		= 0x2F,
	SET_TEMPO			= 0x51,
	SMPTE_OFFSET		= 0x54,
	TIME_SIGNATURE		= 0x58,
	KEY_SIGNATURE		= 0x59,
	SEQUENCER_SPECIFIC	= 0x7F
};

export default abstract class MetaEvent extends Event
{
	constructor(delta: number = 0)
	{
		super(EventType.META, delta);
	}

	protected assertByteLength(actual: number, expected: number)
	{
		if(actual !== expected)
			throw new Error(`Expected length to be ${expected} bytes`);
	}
}