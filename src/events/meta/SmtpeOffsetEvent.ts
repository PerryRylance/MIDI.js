import ReadStream from "../../ReadStream";
import { StatusBytes } from "../../StatusBytes";
import MetaEvent from "./MetaEvent";

enum Rate {
	FPS_24		= 0x0,
	FPS_25		= 0x1,
	FPS_DROP_30	= 0x2,
	FPS_30		= 0x3
};

export default class SmtpeOffsetEvent extends MetaEvent
{
	private rate: number = Rate.FPS_24;
	private minutes: number = 0;
	private seconds: number = 0;
	private frames: number = 0;
	private subframes: number = 0;

	readBytes(stream: ReadStream)
	{
		this.assertByteLength(stream.readByte(), 5);
		
		this.rate		= stream.readByte();

		switch(this.rate)
		{
			case Rate.FPS_24:
			case Rate.FPS_25:
			case Rate.FPS_DROP_30:
			case Rate.FPS_30:
				break;
			
			default:
				throw new Error("Invalid SMTPE rate");
		}

		this.minutes	= stream.readByte();
		this.seconds	= stream.readByte();
		this.frames		= stream.readByte();
		this.subframes	= stream.readByte();
	}
}