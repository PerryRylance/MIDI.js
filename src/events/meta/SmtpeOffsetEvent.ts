import ParseError from "../../exceptions/ParseError";
import ReadStream from "../../streams/ReadStream";

import MetaEvent from "./MetaEvent";

export enum Rate {
	FPS_24		= 0x0,
	FPS_25		= 0x1,
	FPS_DROP_30	= 0x2,
	FPS_30		= 0x3
};

export default class SmtpeOffsetEvent extends MetaEvent
{
	rate: Rate = Rate.FPS_24;
	hours: number = 1;
	minutes: number = 0;
	seconds: number = 0;
	frames: number = 0;
	subframes: number = 0;

	readBytes(stream: ReadStream)
	{
		this.assertByteLength(stream.readByte(), 5);
		
		// NB: The fourth byte specifies the hours of the SMPTE time and the frame rate
		// NB: This byte has the binary format "0sshhhhh". The top bit is zero as it is reserved according to the MIDI time code specifications.
		const byte = stream.readByte();

		// NB: The two bits ss define the frame rate in frames per second.
		this.rate = (byte & 0x60) >> 5;

		// NB: The five hhhhh bits define the hours of the SMPTE time.
		this.hours = byte & 0x1F;

		switch(this.rate)
		{
			case Rate.FPS_24:
			case Rate.FPS_25:
			case Rate.FPS_DROP_30:
			case Rate.FPS_30:
				break;
			
			default:
				throw new ParseError("Invalid SMTPE rate");
		}

		this.minutes	= stream.readByte();
		this.seconds	= stream.readByte();
		this.frames		= stream.readByte();
		this.subframes	= stream.readByte();
	}
}