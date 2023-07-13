import ReadStream from "../../ReadStream";
import { StatusBytes } from "../../StatusBytes";
import MetaEvent from "./MetaEvent";

// TODO: Implement ArbitraryLengthEvent please, this is repeated. Need to turn ArbitraryLengthEvent into a mixin. Reason is that this is a MetaEvent but the code is used in SysEx events too
export default class SequencerSpecificEvent extends MetaEvent
{
	private unknownLength: number = 0;
	private unknownBytes: Uint8Array = new Uint8Array();

	readBytes(stream: ReadStream): void
	{
		this.unknownLength = stream.readVLV();
		this.unknownBytes = new Uint8Array(this.unknownLength);

		for(let i = 0; i < this.unknownLength; i++)
			this.unknownBytes[i] = stream.readByte();
	}
}