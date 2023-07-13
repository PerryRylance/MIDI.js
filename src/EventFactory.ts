import Event, { EventType } from "./events/Event";
import ReadStream from "./ReadStream";
import { StatusBytes } from "./StatusBytes";
import MetaEventFactory from "./MetaEventFactory";
import ControlEventFactory from "./ControlEventFactory";
import SysExEvent from "./events/sysex/SysExEvent";
import AuthorizationSysExEvent from "./events/sysex/AuthorizationSysExEvent";

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
				result = MetaEventFactory.fromStream(stream, delta, status);
				break;
			
			case EventType.SYSEX:
				result = new SysExEvent(delta);
				break;

			case EventType.AUTHORIZATION_SYSEX:
				result = new AuthorizationSysExEvent(delta);
				break;
			
			default:
				result = ControlEventFactory.fromStream(stream, type, delta, status);
				break;
		}
		
		result.readBytes(stream);

		return result;
	}
}