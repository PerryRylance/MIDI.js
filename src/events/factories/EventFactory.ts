import Event, { EventType } from "../Event";
import ReadStream from "../../streams/ReadStream";
import { StatusBytes } from "../../streams/StatusBytes";

import MetaEventFactory from "./MetaEventFactory";
import ControlEventFactory from "./ControlEventFactory";
import SysExEvent from "../sysex/SysExEvent";
import AuthorizationSysExEvent from "../sysex/AuthorizationSysExEvent";

export default class EventFactory
{
	static fromStream(stream: ReadStream, status: StatusBytes): Event
	{
		const delta = stream.readVLV();
		const byte = stream.readByte();
		const type = byte & 0xFF;

		let result: Event;

		switch(type)
		{
			case EventType.META:
				result = MetaEventFactory.fromStream(stream, delta);
				break;
			
			case EventType.SYSEX:
				result = new SysExEvent(delta);
				result.readBytes(stream);
				break;

			case EventType.AUTHORIZATION_SYSEX:
				result = new AuthorizationSysExEvent(delta);
				result.readBytes(stream);
				break;
			
			default:
				result = ControlEventFactory.fromStream(stream, type, delta, status);
				break;
		}

		// TODO: Do we need to reset status bytes if not on a control event?
		
		return result;
	}
}