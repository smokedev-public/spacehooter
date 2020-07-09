const Game = require( './js/game' );
const loader = require( './js/loader' );

// Entry to the app. Loads all assets and creates the game
loader.load( '52.42.25.49:6020', () => {
	new Game( document.body );
});
