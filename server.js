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
let gameData = { radiant: { players: [], score: 0 }, dire: { players: [], score: 0 } };

// Listen for new GSI clients
gsiServer.events.on('newclient', (client) => {
    console.log('New GSI client connected');

    client.on('newdata', (data) => {
        console.log('GSI data:', data);

        // Reset gameData
        gameData = { radiant: { players: [], score: 0 }, dire: { players: [], score: 0 } };

        // Extract Radiant and Dire scores from the map object
        if (data.map) {
            gameData.radiant.score = data.map.radiant_score || 0;
            gameData.dire.score = data.map.dire_score || 0;
        }

        // Check if player data exists
        const teams = ['team2', 'team3'];
        teams.forEach((team, index) => {
            const teamName = index === 0 ? 'radiant' : 'dire';
            if (data.player && data.player[team]) {
                Object.keys(data.player[team]).forEach((playerKey) => {
                    const player = data.player[team][playerKey];
                    const hero = data.hero && data.hero[team] && data.hero[team][playerKey] || {}; // Extract hero data

                    gameData[teamName].players.push({
                        name: player.name || 'Unknown',
                        level: hero.level || 0, // Hero level
                        gold: player.gold || 0,
                        net_worth: player.net_worth || 0, // Net worth directly from player data
                        kills: player.kills || 0,
                        deaths: player.deaths || 0,
                        assists: player.assists || 0,
                        hero_name: hero.name || 'Unknown' // Hero name
                    });
                });
            } else {
                console.warn(`No player data available for ${team}`);
            }
        });
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
