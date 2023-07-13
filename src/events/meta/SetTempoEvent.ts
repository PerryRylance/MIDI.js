import MetaEvent from "./MetaEvent";
import ReadStream from "../../ReadStream";
import { StatusBytes } from "../../StatusBytes";

const MICROSECONDS_PER_MINUTE = 60000000.0;

export default class SetTempoEvent extends MetaEvent
{
	private mspqn: number = 120 * MICROSECONDS_PER_MINUTE;

	get bpm()
	{
		return this.mspqn * MICROSECONDS_PER_MINUTE;
	}

	set bpm(value: number)
	{
		this.mspqn = Math.round(MICROSECONDS_PER_MINUTE / value);
	}

	readBytes(stream: ReadStream)
	{
		this.assertByteLength(stream.readByte(), 3);

		const a = stream.readByte() & 0xFF;
		const b = stream.readByte() & 0xFF;
		const c = stream.readByte() & 0xFF;
		
		this.mspqn = (a << 16) | (b << 8) | c;
	}
}