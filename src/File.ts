import ReadStream from "./streams/ReadStream";
import Track from "./Track";
import ParseError from "./exceptions/ParseError";

const MThd = 0x4D546864;

enum Format {
	TYPE_0	= 0,
	TYPE_1	= 1,
	TYPE_2	= 2
};

export default class File
{
	private tracks: Track[] = [];
	private format: Format = 0;
	private timeDivision: number = 480; // TODO: Support PPQ and FPS

	private readHeader(stream: ReadStream): number
	{
		if(stream.readUint() !== MThd)
			throw new ParseError(stream, "Expected MThd");
		
		const size			= stream.readUint();

		this.format			= stream.readShort();

		const numTracks		= stream.readShort();

		this.timeDivision	= stream.readShort();

		if(size > 6)
			for(let i = 0; i < size - 6; i++)
				stream.readByte(); // TODO: Why are these bytes discarded? Make this code clearer please
		
		return numTracks;
	}

	readBytes(stream: ReadStream)
	{
		const numTracks	= this.readHeader(stream);

		this.tracks = [];

		for(let i = 0; i < numTracks; i++)
		{
			const track = new Track();
			track.readBytes(stream);

			this.tracks.push(track);
		}
	}
}