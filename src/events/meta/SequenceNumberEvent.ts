import ReadStream from "../../streams/ReadStream";
import WriteStream from "../../streams/WriteStream";

import MetaEvent, { MetaEventType } from "./MetaEvent";

export default class SequenceNumberEvent extends MetaEvent
{
	number: number = 0;

	readBytes(stream: ReadStream): void
	{
		this.assertByteLength(stream, stream.readByte(), 2);

		this.number = stream.readShort();
	}

	writeBytes(stream: WriteStream): void
	{
		super.writeBytes(stream);

		stream.writeByte(2);

		stream.writeShort(this.number);
	}

	protected getMetaType(): MetaEventType
	{
		return MetaEventType.SEQUENCE_NUMBER;
	}
}