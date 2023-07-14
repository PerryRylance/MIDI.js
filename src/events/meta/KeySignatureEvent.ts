import ReadStream from "../../streams/ReadStream";

import MetaEvent from "./MetaEvent";

enum Quality
{
	MAJOR = 0,
	MINOR = 1
};

export default class KeySignatureEvent extends MetaEvent
{
	// TODO: Getters and setters for all these
	private accidentals: number = 0;
	private quality: Quality = Quality.MAJOR;

	readBytes(stream: ReadStream): void
	{
		this.assertByteLength(stream, stream.readByte(), 2);

		this.accidentals = stream.readByte();
		this.quality = stream.readByte();
	}
}