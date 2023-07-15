# @perry-rylance/midi
TypeScript library for parsing, building, serializing and debugging MIDI.

There are many JS / TS MIDI parsers online, this library is unique in that not only parses MIDI, it also allows you to construct MIDI from scratch, or alter existing MIDI, in a type-safe and strict fashion. This library will let you programatically build MIDI files and guide you along the way without allowing you to write invalid data. Almost no knowledge of the MIDI spec is required, simply install and start using the library.

## Development
Clone this repository and run `npm install`.

Run `npm run dev` during development to see TypeScript errors.

## Testing
Run `npm run test` to run the entire test suite.

To run individual tests, run `node node_modules/jest/bin/jest.js -i /tests/FileLibrary.test.ts -t "Reads tests\\files\\test-illegal-message-fe.mid"` replacing the argument for `-t` with the name of the test you wish to run.

## Credits
- With thanks to [Recording Blogs](https://www.recordingblogs.com/wiki/musical-instrument-digital-interface-midi), [Teragon Audio](http://midi.teragonaudio.com/tech/midispec/run.htm) and [Mido](https://mido.readthedocs.io/en/latest/meta_message_types.html) for insight into the MIDI spec.
- With thanks to [jazz-soft](https://github.com/jazz-soft/test-midi-files) for the test files.