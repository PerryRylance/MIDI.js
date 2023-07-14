import { StatusBytes } from "../src/streams/StatusBytes";
import { getReadStreamFromBytes } from "./ReadStreamUtils";
import EventByteArrays from "./EventByteArrays";
import EventFactory from "../src/events/factories/EventFactory";
import NoteOnEvent from "../src/events/control/NoteOnEvent";

test("Parse C Major triad with running status", () => {

	const stream = getReadStreamFromBytes(EventByteArrays.RUNNING_C_MAJOR_TRIAD);
	const status: StatusBytes = [0, 0];
	let c: NoteOnEvent, 
		e: NoteOnEvent, 
		g: NoteOnEvent;

	c = EventFactory.fromStream(stream, status) as NoteOnEvent;

	expect(c).toBeInstanceOf(NoteOnEvent);
	expect(c.channel).toBe(0);
	expect(c.key).toBe(60);
	expect(c.velocity).toBe(127);

	e = EventFactory.fromStream(stream, status) as NoteOnEvent;

	expect(e).toBeInstanceOf(NoteOnEvent);
	expect(e.channel).toBe(0);
	expect(e.key).toBe(64);
	expect(e.velocity).toBe(127);

	g = EventFactory.fromStream(stream, status) as NoteOnEvent;

	expect(g.channel).toBe(0);
	expect(g.key).toBe(67);
	expect(g.velocity).toBe(127);

});