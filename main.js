"use strict";
exports.__esModule = true;
var gameRooms = ["W6N1"];
var currentRoom = Game.spawns.Spawn1.room.name;
var roomControllerLevel = Game.rooms[currentRoom].controller.level;
var spawner_1 = require("./src/spawners/spawner");
var task_1 = require("./src/tasks/task");
// import { screepsWork } from "./src/spawners/spawner";
for (var i = 0; i < gameRooms.length; i++) {
    spawner_1.spawnCreeps(gameRooms[i]);
    task_1.assignTasks(gameRooms[i]);
    // screepsWork(gameRooms[i]);
}
