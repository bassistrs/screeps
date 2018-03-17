var roleHarvester = require('role.harvester');
var roleControllerFiller = require('role.controllerFiller');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

	var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
	var controllerFillers = _.filter(Game.creeps, (creep) => creep.memory.role == 'controllerFiller');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

	if(harvesters.length < 2) {
        var newName = 'Harvester' + Game.time;
        console.log("Creating new Creep: " + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}});        
    }

    if(controllerFillers.length < 1) {
        var newName = 'ControllerFiller' + Game.time;
        console.log("Creating new Creep: " + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'controllerFiller'}});        
    }

    if(builders.length < 1){
        var newName = 'Builder' + Game.time;
        console.log("Creating new Creep: " + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'builder'}});
    }

	for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'controllerFiller'){
        	roleControllerFiller.run(creep);
        }
        if(creep.memory.role == 'builder'){
            roleBuilder.run(creep);
        }
    }

}