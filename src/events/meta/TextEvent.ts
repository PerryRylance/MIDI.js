import ReadStream from "../../ReadStream";
import { StatusBytes } from "../../StatusBytes";
import MetaEvent from "./MetaEvent";

export default class TextEvent extends MetaEvent
{
	private text: string = "";

	readBytes(stream: ReadStream): void
	{
		const length = stream.readByte();

		for(let i = 0; i < length; i++)
			this.text += String.fromCharCode(stream.readByte());
	}
}