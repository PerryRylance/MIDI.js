import ReadStream from "../../streams/ReadStream";

import MetaEvent from "./MetaEvent";

export default class PortPrefixEvent extends MetaEvent
{
	private port: number = 0;

	readBytes(stream: ReadStream): void
	{
		this.assertByteLength(stream.readByte(), 1);

		this.port = stream.readByte();
	}
}