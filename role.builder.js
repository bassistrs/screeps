var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var sources = creep.room.find(FIND_SOURCES);
	    var structures = creep.room.find(FIND_MY_STRUCTURES);

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

        if(task == "deliver energy"){
            for(var name in structures){
                if (creep.build() == ERR_NOT_IN_RANGE){
                    creep.moveTo(name);
                }
            }
        }
	}
};

module.exports = roleBuilder;