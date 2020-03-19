"use strict";
exports.__esModule = true;
exports.spawnCreeps = function (gameRoom) {
    var spawns = Game.rooms[gameRoom].find(FIND_MY_SPAWNS);
    var listAllCreeps = Game.creeps;
    listAllCreeps = Object.values(listAllCreeps)

    var numHarvester1 = 0;
    for(var i = 0; i < listAllCreeps.length; i++){
        console.log(typeof listAllCreeps[i])
        console.log(listAllCreeps[i].memory.role)

        if(listAllCreeps[i].memory.role == "harvester1"){
            numHarvester1++;
        }

    }
    console.log(listAllCreeps.length)
    //if(numHarvester1 < 8){
    if(listAllCreeps.length < 8){
        var d = new Date();
        var n = d.getTime();
        n = n *123.63;
        var mycreep = spawns[0].spawnCreep([WORK, CARRY, MOVE, MOVE], "harvester_1_" + n, {
            memory: {
                role: 'harvester1', 
                task: 'None',
            }
        });
    }
};
