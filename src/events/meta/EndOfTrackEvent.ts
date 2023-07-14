import ReadStream from "../../streams/ReadStream";

import MetaEvent, { MetaEventType } from "./MetaEvent";

export default class EndOfTrackEvent extends MetaEvent
{
	readBytes(stream: ReadStream): void
	{
		this.assertByteLength(stream.readByte(), 0);
	}
}