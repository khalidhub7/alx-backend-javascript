#!/usr/bin/env node

import ClassRoom from './0-classroom';

function initializeRooms() {
  return [19, 20, 34]
    .map((i) => new ClassRoom(i));
}
export default initializeRooms;
