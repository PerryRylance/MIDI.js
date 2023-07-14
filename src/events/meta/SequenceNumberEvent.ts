import ReadStream from "../../streams/ReadStream";

import MetaEvent, { MetaEventType } from "./MetaEvent";

export default class SequenceNumberEvent extends MetaEvent
{
	number: number = 0;

	readBytes(stream: ReadStream): void
	{
		this.assertByteLength(stream, stream.readByte(), 2);

		this.number = stream.readShort();
	}
}