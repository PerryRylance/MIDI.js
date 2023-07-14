import ReadStream from "../../streams/ReadStream";
import ControlEvent from "./ControlEvent";
import ParseError from "../../exceptions/ParseError";

export default class PitchWheelEvent extends ControlEvent
{
	value: number = 0x2000; // NB: Value as a 14-bit number. Signed, but without any sign bit. This value is zero.

	readBytes(stream: ReadStream): void
	{
		const first		= stream.readByte();
		const second	= stream.readByte();

		if(first & 0x80)
			throw new ParseError("Expected first bit of first byte to be zero");

		this.value = ((second & 0x7F) << 7) | (first & 0x7F);
	}

	get amount(): number
	{
		if(this.value <= 0x2000)
			return -1 + 2 * ((1 + this.value) / 0x3FFF);
		
		return -1 + 2 * (this.value / 0x3FFF);
	}

	set amount(floating: number)
	{
		if(floating < -1 || floating > 1)
			throw new RangeError("Expected value within -1 to +1");
		
		if(floating > 0)
			this.value = 0x2000 + (Math.round(floating * 0x2000) - 1);
		else
			this.value = Math.round((floating + 1) * 0x2000);
	}
}