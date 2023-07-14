import ReadStream from "../../streams/ReadStream";
import WriteStream from "../../streams/WriteStream";

import MetaEvent, { MetaEventType } from "./MetaEvent";

export default class TextEvent extends MetaEvent
{
	text: string = "";

	readBytes(stream: ReadStream): void
	{
		const length = stream.readByte();

		for(let i = 0; i < length; i++)
			this.text += String.fromCharCode(stream.readByte());
	}

	writeBytes(stream: WriteStream): void
	{
		super.writeBytes(stream);

		stream.writeByte(this.text.length);

		for(let i = 0; i < this.text.length; i++)
			stream.writeByte(this.text.charCodeAt(i));
	}

	protected getMetaType(): MetaEventType
	{
		return MetaEventType.TEXT;
	}
}