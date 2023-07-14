import ReadStream from "../../streams/ReadStream";
import MetaEvent from "./MetaEvent";
import DeviceManufacturer from "../../DeviceManufacturer";

export default class SequencerSpecificEvent extends MetaEvent
{
	manufacturer: DeviceManufacturer = DeviceManufacturer.AKAI;
	bytes: Uint8Array = new Uint8Array();

	readBytes(stream: ReadStream): void
	{
		const length = stream.readByte();

		this.manufacturer = stream.readByte();
		this.bytes = new Uint8Array(length - 1);

		for(let i = 1; i < length; i++)
			this.bytes[i] = stream.readByte();
	}
}