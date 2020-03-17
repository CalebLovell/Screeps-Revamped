"use strict";
exports.__esModule = true;
exports.spawnCreeps = function (gameRoom) {
    var spawns = Game.rooms[gameRoom].find(FIND_MY_SPAWNS);
    console.log(spawns);
    Game.spawns[spawns[0]].spawnCreep([WORK, CARRY, MOVE, MOVE], "Bob");
};
