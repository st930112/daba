let state = {
	players: [],
	current_player_index: 0,
	get current_player() {
		return this.players[this.current_player_index];
	},
	上回采色: undefined
};
export default state;