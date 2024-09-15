async function fetchGameData() {
    try {
        const response = await fetch('/game-data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching game data:', error);
        return { radiant: { players: [] }, dire: { players: [] } };
    }
}

function getTopPlayers(players, stat) {
    return players
        .sort((a, b) => b[stat] - a[stat])
        .slice(0, 2);
}

function updateCard(id, topPlayers, stat) {
    const card = document.getElementById(id);
    if (!card) {
        console.error(`Card with ID ${id} not found.`);
        return;
    }

    const [player1, player2] = topPlayers;
    const player1Elem = card.querySelector(`#player1-${stat}`);
    const player2Elem = card.querySelector(`#player2-${stat}`);

    if (!player1Elem || !player2Elem) {
        console.error(`Player elements for stat ${stat} in card ${id} not found.`);
        return;
    }

    player1Elem.innerHTML = `
        <span class="name">${player1.name}:</span>
        <span class="stat">${player1[stat]}</span>
    `;
    player2Elem.innerHTML = `
        <span class="name">${player2.name}:</span>
        <span class="stat">${player2[stat]}</span>
    `;
}

async function updateCards() {
    const data = await fetchGameData();
    const radiantPlayers = data.radiant.players;
    const direPlayers = data.dire.players;

    const allPlayers = radiantPlayers.concat(direPlayers);

    console.log('Fetched data:', allPlayers);

    updateCard('topKills', getTopPlayers(allPlayers, 'kills'), 'kills');
    updateCard('topDeaths', getTopPlayers(allPlayers, 'deaths'), 'deaths');
    updateCard('topAssists', getTopPlayers(allPlayers, 'assists'), 'assists');
    updateCard('topNetworth', getTopPlayers(allPlayers, 'net_worth'), 'net_worth');
    updateCard('topHeroDamage', getTopPlayers(allPlayers, 'hero_damage'), 'hero_damage');
    updateCard('topWardsPlaced', getTopPlayers(allPlayers, 'wards_placed'), 'wards_placed');
    updateCard('topDewarders', getTopPlayers(allPlayers, 'wards_destroyed'), 'wards_destroyed');
    updateCard('topHealing', getTopPlayers(allPlayers, 'hero_healing'), 'hero_healing');
    updateCard('topCampStackers', getTopPlayers(allPlayers, 'camps_stacked'), 'camps_stacked');
    updateCard('topTowerDamage', getTopPlayers(allPlayers, 'tower_damage'), 'tower_damage');
}

// Fetch and update every 5 seconds
setInterval(updateCards, 5000);

// Initial update
updateCards();
