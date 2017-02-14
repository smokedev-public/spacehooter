const Game = require( './game' );
const loader = require( './loader' );

// Entry to the app. Loads all assets and creates the game
loader.load( '192.168.0.19:6020', () => {
	new Game( document.body );
});
