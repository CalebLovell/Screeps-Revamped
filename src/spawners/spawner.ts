export const spawnCreeps = (gameRoom: string) => {
	const spawns = Game.rooms[gameRoom].find(FIND_MY_SPAWNS);
	console.log(spawns);
	spawns[0].spawnCreep([WORK, CARRY, MOVE, MOVE], `Bob`);
};
