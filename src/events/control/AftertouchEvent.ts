import ReadStream from "../../streams/ReadStream";
import WriteStream from "../../streams/WriteStream";

import ControlEvent, { ControlEventType } from "./ControlEvent";

export default class AftertouchEvent extends ControlEvent
{
	private _key: number = 60;
	private _pressure: number = 127;

	get key(): number
	{
		return this._key;
	}

	set key(value: number)
	{
		this.assertValidKey(value);

		this._key = value;
	}

	get pressure(): number
	{
		return this._pressure;
	}

	set pressure(value: number)
	{
		this.assertValidVelocityLike(value);

		this._pressure = value;
	}

	readBytes(stream: ReadStream): void
	{
		this.key = stream.readByte();
		this.pressure = stream.readByte();
	}

	writeBytes(stream: WriteStream): void
	{
		super.writeBytes(stream);

		stream.writeByte(this.key);
		stream.writeByte(this.pressure);
	}

	protected getTypeHibyte(): number
	{
		return ControlEventType.AFTERTOUCH;
	}
}