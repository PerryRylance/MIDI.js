import ReadStream from "../../ReadStream";
import { StatusBytes } from "../../StatusBytes";
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