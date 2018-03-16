var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    var sources = creep.room.find(FIND_SOURCES);
        var task = creep.memory.task;

        if(creep.carry[RESOURCE_ENERGY] == 0){
            task = "get energy";
        }

        if (creep.carry[RESOURCE_ENERGY] == creep.carryCapacity) {
            task = "deliver energy";
        }

        Console.log(Creep.name + " wants to " + task);


        if(task == "get energy" && creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
            creep.moveTo(sources[0]);
        }

        if(task == "deliver energy" && creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.spawns['Spawn1']);
        }
	}
};

module.exports = roleHarvester;