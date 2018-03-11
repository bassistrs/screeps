var roleHarvester = require('role.harvester');
var roleControllerFiller = require('role.controllerFiller');

module.exports.loop = function () {

	var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
	var controllerFillers = _.filter(Game.creeps, (creep) => creep.memory.role == 'controllerFiller');

	if(harvesters.length < 2) {
        var newName = 'Harvester' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}});        
    }

    if(controllerFillers.length < 1) {
        var newName = 'ControllerFiller' + Game.time;
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'controllerFiller'}});        
    }

	for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'controllerFiller'){
        	roleControllerFiller.run(creep);
        }
    }

}