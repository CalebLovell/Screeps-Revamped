console.log('test')
const gameRooms = ['W2N5'];
import { test } from "test/test";

test()

let currentRoom = Game.spawns.Spawn1.room;
let roomControllerLevel = currentRoom.controller?.level ?? 1;
import { spawnCreeps } from "spawners/spawner";
import { assignTasks } from "tasks/task";
// // import { screepsWork } from "./src/spawners/spawner";

for (let i = 0; i < gameRooms.length; i++) {
	spawnCreeps(gameRooms[i]);
	assignTasks(gameRooms[i]);
	// screepsWork(gameRooms[i]);
}