const express = require('express');
const Dota2GSI = require('dota2-gsi');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Dota2GSI to listen for game state data on port 3001
const gsiServer = new Dota2GSI({ port: 3001 });

// Variable to hold game data
let gameData = { radiant: { players: [] }, dire: { players: [] } };

// Listen for new GSI clients
gsiServer.events.on('newclient', (client) => {
    console.log('New GSI client connected');

    client.on('newdata', (data) => {
        console.log('GSI data:', data);

        // Check if 'player' data exists in 'data'
        if (data.player) {
            // Extract and format data as needed
            if (data.player.team === 'radiant') {
                gameData.radiant.players.push({
                    name: data.player.name || 'Unknown',
                    kills: data.player.kills || 0,
                    deaths: data.player.deaths || 0,
                    assists: data.player.assists || 0,
                });
            } else if (data.player.team === 'dire') {
                gameData.dire.players.push({
                    name: data.player.name || 'Unknown',
                    kills: data.player.kills || 0,
                    deaths: data.player.deaths || 0,
                    assists: data.player.assists || 0,
                });
            }
        }
    });
});

// Endpoint to serve the game data to the overlay
app.get('/game-data', (req, res) => {
    res.json(gameData);
});

// Start the server
app.listen(port, () => {
    console.log(`Overlay server running at http://localhost:${port}`);
});
