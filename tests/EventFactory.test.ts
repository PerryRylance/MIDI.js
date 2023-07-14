import ReadStream from "../src/ReadStream"
import EventFactory from "../src/events/factories/EventFactory";
import TextEvent from "../src/events/meta/TextEvent";
import ParseError from "../src/exceptions/ParseError";
import EventByteArrays from "./EventByteArrays";

const getReadStreamFromBytes = (bytes: number[]) =>
{
	const arr		= Int8Array.from(bytes);
	const stream	= new ReadStream(arr.buffer);

	return stream;
};

const getEventFromByteArray = (bytes: number[]) => {

	const stream = getReadStreamFromBytes(bytes);
	return EventFactory.fromStream(stream, [0, 0]);

};

test("Read text event", () => {

	const event = getEventFromByteArray(EventByteArrays.TEXT);

	expect(event).toBeInstanceOf(TextEvent);
	expect((event as TextEvent).text).toBe("Bass");

});

test("Throw on bad text event", () => {

	expect(() => getEventFromByteArray(EventByteArrays.INVALID_TEXT)).toThrow(ParseError);

});