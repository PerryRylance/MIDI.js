import MetaEvent from "./MetaEvent";
import ReadStream from "../../streams/ReadStream";

export default class TimeSignatureEvent extends MetaEvent
{
	private numerator: number = 4;
	private denominator: number = 4;
	private ticksPerMetronomeClick = 24;
	private num32ndNotesPerBeat = 8;

	readBytes(stream: ReadStream)
	{
		this.assertByteLength(stream, stream.readByte(), 4);
		
		this.numerator = stream.readByte();
		this.denominator = stream.readByte();
		this.ticksPerMetronomeClick = stream.readByte();
		this.num32ndNotesPerBeat = stream.readByte();
	}
}