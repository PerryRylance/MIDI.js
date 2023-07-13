import Stream from "./Stream";

export default class ReadStream extends Stream
{
	private dataView: DataView;

	constructor(buffer: ArrayBuffer)
	{
		super();

		this.dataView = new DataView(buffer);
	}

	readByte()
	{
		const result = this.dataView!.getUint8(this.position);
		this.position++;
		return result;
	}

	readShort()
	{
		const result = this.dataView!.getUint16(this.position);
		this.position += 2;
		return result;
	}

	readUint()
	{
		const result = this.dataView!.getUint32(this.position);
		this.position += 4;
		return result;
	}

	readVLV()
	{
		let value, c;

		if((value = this.readByte()) & 0x80)
		{
			value &= 0x7F;
			do {
				value = (value << 7) + ((c = this.readByte()) & 0x7F);
			}while(c & 0x80);
		}

		return value;
	}

	assertPositionValid(): void
	{
		if(this.position >= 0 && this.position < this.dataView.byteLength)
			return;
		
		throw new RangeError("Invalid stream position");
	}

	seekRelative(relative: number): void
	{
		this.position += relative;

		this.assertPositionValid();
	}
}