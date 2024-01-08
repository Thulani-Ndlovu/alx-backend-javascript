export default function createInt8TypedArray(length, position, value) {
  if (position >= length) { throw new Error('Position outside range'); }
  const arrayBuffer = new DataView(new ArrayBuffer(length), 0, length);
  arrayBuffer.setInt8(position, value);

  return arrayBuffer;
}
