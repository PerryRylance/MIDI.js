import ReadStream from "../../ReadStream";
import { StatusBytes } from "../../StatusBytes";
import MetaEvent, { MetaEventType } from "./MetaEvent";

export default class SequenceNumberEvent extends MetaEvent
{
	private number: number = 0;

	readBytes(stream: ReadStream): void
	{
		this.assertByteLength(stream.readByte(), 2);

		this.number = stream.readShort();
	}
}