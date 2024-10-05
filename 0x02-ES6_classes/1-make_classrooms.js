import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const lisst = [19, 20, 34];
  let i = 0;
  while (i < lisst.length) {
    lisst[i] = new ClassRoom(lisst[i]);
    i++;
  }
  return lisst;
}
