const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const API_PLAYER_URL = `https://web-sandbox.onefootball.com/assignments/player/data/`;
const API_PLAYER_INFO_URL = `https://web-sandbox.onefootball.com/assignments/player/profile/`;
const startCase = require('lodash.startcase');

const asyncHandler = fn => (req, res, next) =>
	Promise
		.resolve(fn(req, res, next))
		.catch(next)

const formatData = (playerInfo) => {
	const newStats = [];
	Object.entries(playerInfo.stats).forEach(([key, value]) => newStats.push({stat: startCase(key), value}));
	playerInfo.stats = newStats;
	return playerInfo;
};

app.get('/player/:id', asyncHandler(async function (request, response) {
	// Enable CORS
	response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

	try {
		let user = await axios.get(`${API_PLAYER_URL}${request.params.id}.json`);
		if (user.data.active === 'true') {
			let userInfo = await axios.get(`${API_PLAYER_INFO_URL}${user.data['profile-id']}`);
			response.json(formatData(userInfo.data));
		}
		response.json({error: 'Player not active'});
	} catch (error) {
		response.json({error: 'Player not found'});
	}
}));

app.listen(port, () => console.log(`Api server starts on port ${port}!`))