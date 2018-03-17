var roleControllerFiller = {

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

        if(task == "get energy" && creep.harvest(sources[1]) == ERR_NOT_IN_RANGE){
            creep.moveTo(sources[1]);
        }

        if(task == "deliver energy" && creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
        }
	}
};

module.exports = roleControllerFiller;