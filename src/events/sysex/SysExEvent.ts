import DeviceManufacturer from "../../DeviceManufacturer";
import ReadStream from "../../streams/ReadStream";
import Event, { EventType } from "../Event";

enum UniversalDevices {
	NON_REAL_TIME	= 0x7E,
	REAL_TIME		= 0x7F
};

type SysExManufacturer = DeviceManufacturer | UniversalDevices;

export default class SysExEvent extends Event
{
	manufacturer: SysExManufacturer = DeviceManufacturer.AKAI;
	bytes: Uint8Array = new Uint8Array(); // NB: Payload not including 0xF7 terminator

	constructor(delta: number = 0)
	{
		super(EventType.SYSEX, delta);
	}

	readBytes(stream: ReadStream): void
	{
		const buffer: number[] = [];
		let byte;

		this.manufacturer = stream.readByte();

		while((byte = stream.readByte()) !== 0xF7)
			buffer.push(byte);
		
		this.bytes = new Uint8Array(buffer);
	}
}