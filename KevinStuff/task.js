"use strict";
exports.__esModule = true;
exports.assignTasks = function (gameRoom) {
    
    var listAllCreeps = Game.creeps;
    listAllCreeps = Object.values(listAllCreeps)
    var spawns = Game.rooms[gameRoom].find(FIND_MY_SPAWNS);
    
    //this should be function
    

    

    
    for(var i = 0; i < listAllCreeps.length; i++){
        
        var energyOnWayToSpawn = 0;
        for(var j = 0; j < listAllCreeps.length; j++){
            if(listAllCreeps[j].memory.role == "harvester1"){
                if(listAllCreeps[j].memory.task == "DepositSpawn"){
                    energyOnWayToSpawn = energyOnWayToSpawn + listAllCreeps[j].store.getUsedCapacity(RESOURCE_ENERGY);
                }
            }
        }        
        
        if(listAllCreeps[i].memory.role == "harvester1"){
            
            if(listAllCreeps[i].memory.task == "None"){
                    
                    console.log(listAllCreeps[i].store.getUsedCapacity(RESOURCE_ENERGY))
                    if(listAllCreeps[i].store.getUsedCapacity(RESOURCE_ENERGY) == 0){
                        listAllCreeps[i].memory.task = "Harvest";
                    }

                    if(listAllCreeps[i].store.getUsedCapacity(RESOURCE_ENERGY) > 0){
                        
                        if(spawns[0].store.getFreeCapacity(RESOURCE_ENERGY) - energyOnWayToSpawn > 0){
                            listAllCreeps[i].memory.task = "DepositSpawn";
                        }else{
                            listAllCreeps[i].memory.task = "Upgrade";

                        }
                    }else{
                        listAllCreeps[i].memory.task = "Harvest";

                    }                    
                    
                
            }
        } 
    }
    
    
};
