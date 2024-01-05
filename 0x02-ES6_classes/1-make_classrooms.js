import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const array = [];
  array.push(new ClassRoom(19));
  array.push(new ClassRoom(20));
  array.push(new ClassRoom(34));

  return array;
}
