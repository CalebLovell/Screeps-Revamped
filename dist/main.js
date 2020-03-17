//
// ___________________________________________________________
//
//  _____  _    _ _______  ______ _______ _____ __   _ ______
// |     |  \  /  |______ |_____/ |  |  |   |   | \  | |     \
// |_____|   \/   |______ |    \_ |  |  | __|__ |  \_| |_____/
//
// _______________________ Screeps AI ________________________
//
//
// Overmind repository: github.com/bencbartlett/overmind
//

'use strict';

const test = () => { console.log('test2'); };

const spawnCreeps = (gameRoom) => {
    const spawns = Game.rooms[gameRoom].find(FIND_MY_SPAWNS);
    console.log(spawns);
    spawns[0].spawnCreep([WORK, CARRY, MOVE, MOVE], `Bob`);
};

const assignTasks = (gameRoom) => {
};

var _a, _b;
console.log('test');
const gameRooms = ['W2N5'];
test();
let currentRoom = Game.spawns.Spawn1.room;
let roomControllerLevel = (_b = (_a = currentRoom.controller) === null || _a === void 0 ? void 0 : _a.level) !== null && _b !== void 0 ? _b : 1;
// // import { screepsWork } from "./src/spawners/spawner";
for (let i = 0; i < gameRooms.length; i++) {
    spawnCreeps(gameRooms[i]);
    assignTasks(gameRooms[i]);
    // screepsWork(gameRooms[i]);
}
