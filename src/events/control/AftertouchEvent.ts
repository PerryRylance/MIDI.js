import ReadStream from "../../streams/ReadStream";

import ControlEvent from "./ControlEvent";

export default class AftertouchEvent extends ControlEvent
{
	private key: number = 60;
	private pressure: number = 127;

	readBytes(stream: ReadStream): void
	{
		
	}
}