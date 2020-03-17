const gameRooms = [`W6N1`];

let currentRoom = Game.spawns.Spawn1.room.name;
let roomControllerLevel = Game.rooms[currentRoom].controller.level;

import { spawnCreeps } from "./src/spawners/spawner";
import { assignTasks } from "./src/tasks/task";
// import { screepsWork } from "./src/spawners/spawner";

for (let i = 0; i < gameRooms.length; i++) {
	spawnCreeps(gameRooms[i]);
	assignTasks(gameRooms[i]);
	// screepsWork(gameRooms[i]);
}
