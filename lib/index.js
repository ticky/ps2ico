const PS2_ICON_MAGIC = 0x010000;
const PS2_ICON_MAGIC_2 = 0x3F800000;

const readU32 = (view, offset) => view.getUint32(offset, true);

module.exports = (buffer) => {
  const dataView = new DataView(buffer);

  if (readU32(dataView, 0) !== PS2_ICON_MAGIC || readU32(dataView, 12) !== PS2_ICON_MAGIC_2) {
    throw new Error('Invalid PS2 Icon: Missing magic!');
  }

  const frameCount = readU32(dataView, 4);
  const textureCompression = readU32(dataView, 8) !== 7;
  const vertexCount = readU32(dataView, 16);

  console.log(`${frameCount} frame(s) expected`);
  console.log(`compressed textures: ${textureCompression}`);
  console.log(`${vertexCount} vertices expected (${vertexCount / 3} triangles)`);

  return dataView;
};
