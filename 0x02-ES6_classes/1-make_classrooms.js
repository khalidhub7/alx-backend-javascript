import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const lisst = [19, 20, 34];
  return lisst.map((i) => new ClassRoom(i));
}
