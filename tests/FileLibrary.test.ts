import { globSync } from "glob";
import ReadStream from "../src/streams/ReadStream";
import File from "../src/File";

const files = globSync("./tests/files/*.mid");

for(const file of files)
{
	test(`Reads ${file}`, () => {

		const fs		= require("fs");
		const contents	= fs.readFileSync(file);
		const stream	= new ReadStream(contents.buffer);
		const midi		= new File();

		const expectation = expect(() => midi.readBytes(stream));

		if(/illegal|corrupt/.test(file))
			expectation.toThrowError();

	});
}