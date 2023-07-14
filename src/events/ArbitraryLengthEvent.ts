import Event from "./Event";
import ReadStream from "../streams/ReadStream";

export default abstract class ArbitraryLengthEvent extends Event
{
	private unknownLength: number = 0;
	private unknownBytes: Uint8Array = new Uint8Array();

	readBytes(stream: ReadStream): void
	{
		this.unknownLength = stream.readVLV();
		this.unknownBytes = new Uint8Array(this.unknownLength);

		for(let i = 0; i < this.unknownLength; i++)
			this.unknownBytes[i] = stream.readByte();
	}
}