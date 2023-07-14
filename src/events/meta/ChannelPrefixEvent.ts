import ReadStream from "../../streams/ReadStream";

import MetaEvent from "./MetaEvent";

export default class ChannelPrefixEvent extends MetaEvent
{
	private channel: number = 0;

	readBytes(stream: ReadStream): void
	{
		this.assertByteLength(stream.readByte(), 1);

		this.channel = stream.readByte();
	}
}