var roleControllerFiller = {

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


        if(task == "get energy" && creep.harvest(sources[1]) == ERR_NOT_IN_RANGE){
            creep.moveTo(sources[1]);
        }

        if(task == "deliver energy" && creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
        }
	}
};

module.exports = roleControllerFiller;