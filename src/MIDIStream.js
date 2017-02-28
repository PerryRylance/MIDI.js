function MIDIStream(buffer)
{
	this.write = null;

	if(!buffer)
	{
		this.write = [];
	}
	else if(buffer instanceof ArrayBuffer)
	{
		var dv = new DataView(buffer);
	}
	else
		throw new Error("Input must be an instance of ArrayBuffer or omitted for write stream");

	this.position = 0;
}

MIDIStream.prototype.readByte = function()
{
	var result = dv.getUint8(this.position);
	this.position++;
	return result;
}

MIDIStream.prototype.readShort = function()
{
	var result = dv.getUint16(this.position);
	this.position += 2;
	return result;
}

MIDIStream.prototype.readUint = function()
{
	var result = dv.getUint32(this.position);
	this.position += 4;
	return result;
}

MIDIStream.prototype.readVLV = function()
{
	var value;
	var c;
	
	if((value = this.readByte()) & 0x80)
	{
		value &= 0x7F;
		do{
			value = (value << 7) + ((c = this.readByte()) & 0x7F);
		}while(c & 0x80);
	}
	
	return value;
}

MIDIStream.prototype.writeByte = function(value)
{
	this.write[this.position] = value;
	this.position++;
}

MIDIStream.prototype.writeShort = function(value)
{
	this.write[this.position] 	= (value & 0xFF00) >> 8;
	this.write[this.position+1]	= (value & 0xFF);
	
	this.position += 2;
}

MIDIStream.prototype.writeUint = function(value)
{
	this.write[this.position] 	= (value & 0xFF000000) >> 24;
	this.write[this.position+1]	= (value & 0xFF0000) >> 16;
	this.write[this.position+2]	= (value & 0xFF00) >> 8;
	this.write[this.position+3]	= (value & 0xFF);

	this.position += 4;
}

MIDIStream.prototype.writeVLV = function(value)
{
	var buffer = value & 0x7F;
	while((value >>= 7) > 0)
	{
		buffer <<= 8;
		buffer |= 0x80;
		buffer += (value & 0x7F);
	}
	
	while(1)
	{
		this.writeByte(buffer);
		if(buffer & 0x80)
			buffer >>= 8;
		else
			break;
	}
}

MIDIStream.prototype.toArrayBuffer = function()
{
	if(!this.write)
		throw new Error("This is not a write stream");
	
	var buffer = new ArrayBuffer(this.write.length);
	var dv = new DataView(buffer);
	
	var len = this.write.length;
	for(var i = 0; i < len; i++)
		dv.setUint8(i, this.write[i]);
		
	return buffer;
}