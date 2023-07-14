import ReadStream from "../../streams/ReadStream";

import MetaEvent from "./MetaEvent";

export default class TextEvent extends MetaEvent
{
	text: string = "";

	readBytes(stream: ReadStream): void
	{
		const length = stream.readByte();

		for(let i = 0; i < length; i++)
			this.text += String.fromCharCode(stream.readByte());
	}
}