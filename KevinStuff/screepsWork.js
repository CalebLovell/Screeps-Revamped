"use strict";
exports.__esModule = true;
exports.screepsWork = function (gameRoom) {
    var spawns = Game.rooms[gameRoom].find(FIND_MY_SPAWNS);
    var listAllCreeps = Game.creeps;
    listAllCreeps = Object.values(listAllCreeps)


    
    for(var i = 0; i < listAllCreeps.length; i++){
        var creep = listAllCreeps[i]; 

        if(listAllCreeps[i].memory.role == "harvester1"){
            console.log(listAllCreeps[i].memory.task)
            if(listAllCreeps[i].memory.task == "Harvest"){
                console.log(creep.store.getFreeCapacity(RESOURCE_ENERGY))

                if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0){
                    creep.memory.task = "None";
                }

                const target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                if(target) {
                    if(creep.harvest(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                }

            }
            
            if(listAllCreeps[i].memory.task == "DepositSpawn"){
                
                console.log(creep.moveTo(spawns[0]))
                
                if(creep.transfer(spawns[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(spawns[0]);
                }
                
                if(creep.store.getUsedCapacity(RESOURCE_ENERGY) < creep.store.getCapacity(RESOURCE_ENERGY)){
                    creep.memory.task = "None";
                }                
                
            }
            if(listAllCreeps[i].memory.task == "Upgrade"){
                console.log("roomr conroller")
                console.log(creep.room.controller)
                if(creep.room.controller) {
                    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller);
                    }
                }
                if(creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0){
                    creep.memory.task = "None";
                }                
            }            
            
            
                


        }
    }
};
