import Event from "./events/Event";
import ReadStream from "./ReadStream";
import { StatusBytes } from "./StatusBytes";
import MetaEvent, { MetaEventType } from "./events/meta/MetaEvent";
import TextEvent from "./events/meta/TextEvent";
import SetTempoEvent from "./events/meta/SetTempoEvent";
import SmtpeOffsetEvent from "./events/meta/SmtpeOffsetEvent";
import SequenceNumberEvent from "./events/meta/SequenceNumberEvent";
import EndOfTrackEvent from "./events/meta/EndOfTrackEvent";
import ChannelPrefixEvent from "./events/meta/ChannelPrefixEvent";
import PortPrefixEvent from "./events/meta/PortPrefixEvent";
import SequencerSpecificEvent from "./events/meta/SequencerSpecificEvent";
import CopyrightEvent from "./events/meta/CopyrightEvent";
import TrackNameEvent from "./events/meta/TrackNameEvent";
import InstrumentNameEvent from "./events/meta/InstrumentNameEvent";
import LyricEvent from "./events/meta/LyricEvent";
import MarkerEvent from "./events/meta/MarkerEvent";
import CuePointEvent from "./events/meta/CuePointEvent";

export default class MetaEventFactory
{
	static fromStream(stream: ReadStream, delta: number, status: StatusBytes): MetaEvent
	{
		const type: MetaEventType = stream.readByte();
		let result: MetaEvent;

		switch(type)
		{
			case MetaEventType.TEXT:
				result = new TextEvent(delta);
				break;

			case MetaEventType.COPYRIGHT:
				result = new CopyrightEvent(delta);
				break;

			case MetaEventType.TRACK_NAME:
				result = new TrackNameEvent(delta);
				break;

			case MetaEventType.INSTRUMENT_NAME:
				result = new InstrumentNameEvent(delta);
				break;

			case MetaEventType.LYRIC:
				result = new LyricEvent(delta);
				break;

			case MetaEventType.MARKER:
				result = new MarkerEvent(delta);
				break;

			case MetaEventType.CUE_POINT:
				result = new CuePointEvent(delta);
				break;
		
			case MetaEventType.SET_TEMPO:
				result = new SetTempoEvent(delta);
				break;
			
			case MetaEventType.SMPTE_OFFSET:
				result = new SmtpeOffsetEvent(delta);
				break;
			
			case MetaEventType.SEQUENCE_NUMBER:
				result = new SequenceNumberEvent(delta);
				break;
			
			case MetaEventType.END_OF_TRACK:
				result = new EndOfTrackEvent(delta);
				break;
			
			case MetaEventType.CHANNEL_PREFIX:
				result = new ChannelPrefixEvent(delta);
				break;
			
			case MetaEventType.PORT_PREFIX:
				result = new PortPrefixEvent(delta);
				break;
			
			case MetaEventType.SEQUENCER_SPECIFIC:
				result = new SequencerSpecificEvent(delta);
				break;

			default:
				throw new Error("Unknown meta event type 0x" + type.toString(16));
		}

		result.readBytes(stream);

		return result;
	}
}