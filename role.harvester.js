var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    var sources = creep.room.find(FIND_SOURCES);

        if(creep.carry[RESOURCE_ENERGY] == 0){
            creep.memory.task = "get energy";
        }

        if (creep.carry[RESOURCE_ENERGY] == creep.carryCapacity) {
            creep.memory.task = "deliver energy";
        }

        var task = creep.memory.task;

        console.log(creep.name + " wants to " + task);


        if(task == "get energy" && creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
            creep.moveTo(sources[0]);
        }

        if(task == "deliver energy" && creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.spawns['Spawn1']);
        }
	}
};

module.exports = roleHarvester;