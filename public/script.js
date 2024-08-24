// Hero name mapping
const heroNameMapping = {
    "npc_dota_hero_pangolier": "Pangolier",
    "npc_dota_hero_hoodwink": "HoodWink",
    "npc_dota_hero_monkey_king": "Monkey King",
    "npc_dota_hero_windrunner": "Windranger",
    "npc_dota_hero_batrider": "Batrider",
    "npc_dota_hero_centaur": "Centaur",
    "npc_dota_hero_shredder": "Timbersaw",
    "npc_dota_hero_sniper": "Sniper",
    "npc_dota_hero_ringmaster": "Ringmaster",
    "npc_dota_hero_primal_beast": "Primal Beast",
    "npc_dota_hero_marci": "Marci",
    "npc_dota_hero_alchemist": "Alchemist",
    "npc_dota_hero_ancient_apparition": "Ancient Apparition",
    "npc_dota_hero_antimage": "Anti-Mage",
    "npc_dota_hero_axe": "Axe",
    "npc_dota_hero_bane": "Bane",
    "npc_dota_hero_bloodseeker": "Bloodseeker",
    "npc_dota_hero_crystal_maiden": "Crystal Maiden",
    "npc_dota_hero_dazzle": "Dazzle",
    "npc_dota_hero_death_prophet": "Death Prophet",
    "npc_dota_hero_disruptor": "Disruptor",
    "npc_dota_hero_doom_bringer": "Doom",
    "npc_dota_hero_dragon_knight": "Dragon Knight",
    "npc_dota_hero_drow_ranger": "Drow Ranger",
    "npc_dota_hero_earth_spirit": "Earth Spirit",
    "npc_dota_hero_earthshaker": "Earthshaker",
    "npc_dota_hero_elder_titan": "Elder Titan",
    "npc_dota_hero_ember_spirit": "Ember Spirit",
    "npc_dota_hero_enchantress": "Enchantress",
    "npc_dota_hero_enigma": "Enigma",
    "npc_dota_hero_faceless_void": "Faceless Void",
    "npc_dota_hero_gyrocopter": "Gyrocopter",
    "npc_dota_hero_huskar": "Huskar",
    "npc_dota_hero_invoker": "Invoker",
    "npc_dota_hero_jakiro": "Jakiro",
    "npc_dota_hero_juggernaut": "Juggernaut",
    "npc_dota_hero_keeper_of_the_light": "Keeper of the Light",
    "npc_dota_hero_kunkka": "Kunkka",
    "npc_dota_hero_legion_commander": "Legion Commander",
    "npc_dota_hero_leshrac": "Leshrac",
    "npc_dota_hero_lich": "Lich",
    "npc_dota_hero_lifestealer": "Lifestealer",
    "npc_dota_hero_lina": "Lina",
    "npc_dota_hero_lion": "Lion",
    "npc_dota_hero_lycan": "Lycan",
    "npc_dota_hero_magnus": "Magnus",
    "npc_dota_hero_medusa": "Medusa",
    "npc_dota_hero_meepo": "Meepo",
    "npc_dota_hero_mirana": "Mirana",
    "npc_dota_hero_morphling": "Morphling",
    "npc_dota_hero_naga_siren": "Naga Siren",
    "npc_dota_hero_nature_prophet": "Nature's Prophet",
    "npc_dota_hero_necrophos": "Necrophos",
    "npc_dota_hero_night_stalker": "Night Stalker",
    "npc_dota_hero_nyx_assassin": "Nyx Assassin",
    "npc_dota_hero_ogre_magi": "Ogre Magi",
    "npc_dota_hero_omniknight": "Omniknight",
    "npc_dota_hero_oracle": "Oracle",
    "npc_dota_hero_phantom_assassin": "Phantom Assassin",
    "npc_dota_hero_phantom_lancer": "Phantom Lancer",
    "npc_dota_hero_pugna": "Pugna",
    "npc_dota_hero_queen_of_pain": "Queen of Pain",
    "npc_dota_hero_riki": "Riki",
    "npc_dota_hero_sand_king": "Sand King",
    "npc_dota_hero_shadow_demon": "Shadow Demon",
    "npc_dota_hero_shadow_fiend": "Shadow Fiend",
    "npc_dota_hero_shadow_shaman": "Shadow Shaman",
    "npc_dota_hero_silencer": "Silencer",
    "npc_dota_hero_skywrath_mage": "Skywrath Mage",
    "npc_dota_hero_slardar": "Slardar",
    "npc_dota_hero_slark": "Slark",
    "npc_dota_hero_sven": "Sven",
    "npc_dota_hero_techies": "Techies",
    "npc_dota_hero_templar_assassin": "Templar Assassin",
    "npc_dota_hero_terrorblade": "Terrorblade",
    "npc_dota_hero_tidehunter": "Tidehunter",
    "npc_dota_hero_tinker": "Tinker",
    "npc_dota_hero_tiny": "Tiny",
    "npc_dota_hero_treant": "Treant Protector",
    "npc_dota_hero_troll_warlord": "Troll Warlord",
    "npc_dota_hero_tusk": "Tusk",
    "npc_dota_hero_undying": "Undying",
    "npc_dota_hero_ursa": "Ursa",
    "npc_dota_hero_vengeful_spirit": "Vengeful Spirit",
    "npc_dota_hero_venomancer": "Venomancer",
    "npc_dota_hero_viper": "Viper",
    "npc_dota_hero_visage": "Visage",
    "npc_dota_hero_warlock": "Warlock",
    "npc_dota_hero_weaver": "Weaver",
    "npc_dota_hero_windranger": "Windranger",
    "npc_dota_hero_winter_wyvern": "Winter Wyvern",
    "npc_dota_hero_wisp": "Wisp",
    "npc_dota_hero_zuus": "Zeus",
    "npc_dota_hero_chaos_knight": "Chaos Knight",
    "npc_dota_hero_beastmaster": "Beast Master",
    "npc_dota_hero_furion": "Nature Prophet",
    "npc_dota_hero_void_spirit": "Void Spirit",
    "npc_dota_hero_rubick": "Rubick",
};

// Function to get human-readable hero name
const getHeroName = (internalName) => {
    return heroNameMapping[internalName] || internalName;
};

// Function to create a player table row
const createPlayerRow = (player) => {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td class="player-name">
            ${player.name || 'Unknown'} <br>
            <span style="color: grey; font-size: smaller;">
                ${getHeroName(player.hero_name)}
            </span>
        </td>
        <td class="gold">${player.gold || 0}</td>
        <td class="lvl">
    	    <span class="lvl-circle";>${player.level || 0}</span>
	</td>
        <td class="k">${player.kills || 0}</td>
        <td class="d">${player.deaths || 0}</td>
        <td class="a">${player.assists || 0}</td>
        <td class="net_worth">${player.net_worth || 0}</td>
    `;

    return row;
};

async function fetchGameData() {
    try {
        const response = await fetch('/game-data');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched game data:', data); // Debugging line

        // Update scores
        document.getElementById('radiant-score').textContent = `${data.radiant.score || 0}`;
        document.getElementById('dire-score').textContent = `${data.dire.score || 0}`;

        // Clear existing player rows
        document.getElementById('radiant-players').innerHTML = '';
        document.getElementById('dire-players').innerHTML = '';

        // Populate Radiant players
        data.radiant.players.forEach(player => {
            document.getElementById('radiant-players').appendChild(createPlayerRow(player));
        });

        // Populate Dire players
        data.dire.players.forEach(player => {
            document.getElementById('dire-players').appendChild(createPlayerRow(player));
        });

    } catch (error) {
        console.error('Error fetching game data:', error);
        // Optionally show a message to the user
        document.getElementById('radiant-players').innerHTML = '<tr><td colspan="7">Error loading data</td></tr>';
        document.getElementById('dire-players').innerHTML = '<tr><td colspan="7">Error loading data</td></tr>';
    }
}

// Set an appropriate interval for fetching data
setInterval(fetchGameData, 5000); // Fetch data every 5 seconds