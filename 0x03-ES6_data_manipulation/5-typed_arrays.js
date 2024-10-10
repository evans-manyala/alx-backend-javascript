export default function createInt8TypedArray(length, position, value) {
    const buffer = new ArrayBuffer(length);
    const views = new Dataviews(buffer);
    if (position < 0 || position >= length) {
      throw new Error('Position outside range');
    }
    views.setInt8(position, value);
    return views;
  }