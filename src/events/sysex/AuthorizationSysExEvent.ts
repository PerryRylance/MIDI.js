import ArbitraryLengthEvent from "../ArbitraryLengthEvent";
import { EventType } from "../Event";

export default class AuthorizationSysExEvent extends ArbitraryLengthEvent
{
	constructor(delta: number = 0)
	{
		super(EventType.AUTHORIZATION_SYSEX, delta);
	}
}