import ReadStream from "./ReadStream";
import ParseError from "./exceptions/ParseError";
import { StatusBytes } from "./StatusBytes";
import Event from "./events/Event";
import EventFactory from "./EventFactory";
import MetaEvent from "./events/meta/MetaEvent";
import EndOfTrackEvent from "./events/meta/EndOfTrackEvent";

const MTrk		= 0x4D54726B;
const trackEnd	= 0x00FF2F00;

export default class Track
{
	events: Event[] = [];

	readBytes(stream: ReadStream)
	{
		if(stream.readUint() !== MTrk)
			throw new ParseError("Expected MTrk");
		
		const chunkSize = stream.readUint();
		const status: StatusBytes = [0, 0];

		let bytes = 0, cursor = 0, eot = false;
		let event: Event;

		while(bytes < chunkSize)
		{
			if(eot)
				throw new ParseError("Unexpected end of track event");

			cursor	= stream.getPosition();
			event	= EventFactory.fromStream(stream, status);
			
			if(event instanceof EndOfTrackEvent)
				eot = true;
			
			bytes += stream.getPosition() - cursor;
		}

		if(!eot)
			throw new ParseError("Expected end of track event");
		
		if(bytes < chunkSize)
			throw new ParseError("Expected bytes read to be equal to specified chunk size");
	}
}