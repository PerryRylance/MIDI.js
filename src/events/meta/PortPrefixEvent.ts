import ReadStream from "../../streams/ReadStream";
import WriteStream from "../../streams/WriteStream";

import MetaEvent, { MetaEventType } from "./MetaEvent";

export default class PortPrefixEvent extends MetaEvent
{
	port: number = 0;

	readBytes(stream: ReadStream): void
	{
		this.assertByteLength(stream, stream.readByte(), 1);

		this.port = stream.readByte();
	}

	writeBytes(stream: WriteStream): void
	{
		super.writeBytes(stream);

		stream.writeByte(1);

		stream.writeByte(this.port);
	}

	protected getMetaType(): MetaEventType
	{
		return MetaEventType.PORT_PREFIX;
	}
}