"use strict";
exports.__esModule = true;
//var gameRooms = ["W3N7"];
var gameRooms = ["W7N7"];
var currentRoom = Game.spawns.Spawn1.room.name;
var roomControllerLevel = Game.rooms[currentRoom].controller.level;
//var spawner_1 = require("C:/Users/kevin/AppData/Local/Screeps/scripts/192_168_1_7___21025/default/src/spawners/spawner.js");
var spawner_1 = require("spawner")
var task_1 = require("task");
var work_1 = require("screepsWork")
// import { screepsWork } from "./src/spawners/spawner";
for (var i = 0; i < gameRooms.length; i++) {
    spawner_1.spawnCreeps(gameRooms[i]);
    task_1.assignTasks(gameRooms[i]);
    work_1.screepsWork(gameRooms[i]);
}
