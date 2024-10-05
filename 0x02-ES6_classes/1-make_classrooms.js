import ClassRoom from './0-classroom.js';

const initializeRooms = () => {
  const list = [19, 20, 34];
  list.forEach((room, index) => {
    list[index] = new ClassRoom(room);
  });
  return list;
};
export default initializeRooms;
