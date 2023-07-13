import ArbitraryLengthEvent from "../ArbitraryLengthEvent";
import { EventType } from "../Event";

export default class SysExEvent extends ArbitraryLengthEvent
{
	constructor(delta: number = 0)
	{
		super(EventType.SYSEX, delta);
	}
}