const heroNameMapping = {
    "npc_dota_hero_abyssal_underlord": "Underlord",
    "npc_dota_hero_mars": "Mars",
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
    "npc_dota_hero_beastmaster": "Beastmaster",
    "npc_dota_hero_furion": "Nature's Prophet",
    "npc_dota_hero_void_spirit": "Void Spirit",
    "npc_dota_hero_rubick": "Rubick",
};
const getHeroGifUrl = (heroName) => {
    return `./gifs/${heroName}.gif`;
};




const getHeroImageUrl = (heroName) => {
    const heroFileName = heroName.replace('npc_dota_hero_', '');

    return `https://cdn.stratz.com/images/dota2/heroes/${heroFileName}_horz.png`;
};



const getTeamImageUrl = (teamName) => {
    return `./logos/${teamName}.png`;
};
document.addEventListener("DOMContentLoaded", () => {
    // Function to fetch game data from /game-data
    async function fetchGameData() {
        try {
            const response = await fetch('/game-data'); 
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const gameData = await response.json();
            updatePicks(gameData);
        } catch (error) {
            console.error('Error fetching game data:', error);
        }
    }

    // Function to format seconds into mm:ss
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    const addTimeOverlay = (element, activeTeamRemainingTime, radiantBonusTime, direBonusTime, activeTeam) => {
        const overlay = document.createElement('div');
        overlay.className = 'time-overlay';

        let displayTime;
        let isReserveTime = false;

        if (activeTeamRemainingTime > 0) {
            displayTime = formatTime(activeTeamRemainingTime); 
        } else {
            displayTime = formatTime(activeTeam === 2 ? radiantBonusTime : direBonusTime); 
            isReserveTime = true;
        }

        overlay.textContent = displayTime;
        overlay.style.position = 'absolute';
        overlay.style.bottom = '5px';
        overlay.style.right = '5px';
        overlay.style.padding = '2px 5px';
        overlay.style.borderRadius = '5px';
        overlay.style.fontSize = '23px';
        overlay.style.fontWeight = 'bold';
        overlay.style.transition = 'all 0.5s ease';

        // Apply styles based on the type of time (active or reserve)
        if (isReserveTime) {
            overlay.style.color = '#bf8a0d';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            overlay.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.8)';
        } else {
            overlay.style.color = '#fff';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            overlay.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.5)';
        }

        element.parentElement.style.position = 'relative';
        element.parentElement.appendChild(overlay);
    };


    // Function to update the picks, team logos, and reserve time on the page
    function updatePicks(gameData) {
        const radiantPicks = gameData.draft.radiant.picks;
        const direPicks = gameData.draft.dire.picks;
        const radiantBans = gameData.draft.radiant.bans;
        const direBans = gameData.draft.dire.bans;
        const radiantBonusTime = gameData.draft.radiantBonusTime;
        const direBonusTime = gameData.draft.direBonusTime;
        const activeTeam = gameData.draft.activeTeam;
        const pickPhase = gameData.draft.pick;
        const activeTeamRemainingTime = gameData.draft.activeTeamRemainingTime;
        const radiantTeamName = gameData.radiant.team_name;
        const direTeamName = gameData.dire.team_name;

        const radiantPickElements = document.querySelectorAll("#radiant-picks img");
        const direPickElements = document.querySelectorAll("#dire-picks img");
        const radiantBanElements = document.querySelectorAll("#radiant-bans img");
        const direBanElements = document.querySelectorAll("#dire-bans img");
        const teamLogoElements = document.querySelectorAll(".team-logos-container img");
        const reserveTimeElement = document.querySelector("#reserve-time .reserve-text");

        // Clear previous overlays
        document.querySelectorAll('.time-overlay').forEach(overlay => overlay.remove());

        // Update Radiant picks
        radiantPickElements.forEach((img, index) => {
            const pickKey = `pick${index + 1}`;
            const heroName = radiantPicks[pickKey];

            // Only update if the data-src attribute isn't set
            if (heroName && !img.hasAttribute('data-src')) {
                img.src = getHeroGifUrl(heroName);
                img.alt = heroNameMapping[heroName] || heroName;
                img.setAttribute('data-src', img.src); 
            }

            // Add overlay if Radiant is the active team and it's the pick phase
            if (activeTeam === 2 && pickPhase && index === Object.keys(radiantPicks).length - 1) {
                addTimeOverlay(img, activeTeamRemainingTime, radiantBonusTime, direBonusTime, activeTeam);
            }
        });

        // Update Dire picks
        direPickElements.forEach((img, index) => {
            const pickKey = `pick${index + 1}`;
            const heroName = direPicks[pickKey];

            // Only update if the data-src attribute isn't set
            if (heroName && !img.hasAttribute('data-src')) {
                img.src = getHeroGifUrl(heroName);
                img.alt = heroNameMapping[heroName] || heroName;
                img.setAttribute('data-src', img.src); 
            }

            // Add overlay if Dire is the active team and it's the pick phase
            if (activeTeam === 3 && pickPhase && index === Object.keys(direPicks).length - 1) {
                addTimeOverlay(img, activeTeamRemainingTime, radiantBonusTime, direBonusTime, activeTeam);
            }
        });

        // Update Radiant bans
        radiantBanElements.forEach((img, index) => {
            const banKey = `ban${index + 1}`;
            const heroName = radiantBans[banKey];

            // Only update if the data-src attribute isn't set
            if (heroName && !img.hasAttribute('data-src')) {
                img.src = getHeroImageUrl(heroName);
                img.alt = heroNameMapping[heroName] || heroName;
                img.setAttribute('data-src', img.src); 
            }

            // Add overlay if Radiant is the active team and it's the ban phase
            if (activeTeam === 2 && !pickPhase && index === Object.keys(radiantBans).length - 1) {
                addTimeOverlay(img, activeTeamRemainingTime, radiantBonusTime, direBonusTime, activeTeam);
            }
        });

        // Update Dire bans
        direBanElements.forEach((img, index) => {
            const banKey = `ban${index + 1}`;
            const heroName = direBans[banKey];

            // Only update if the data-src attribute isn't set
            if (heroName && !img.hasAttribute('data-src')) {
                img.src = getHeroImageUrl(heroName);
                img.alt = heroNameMapping[heroName] || heroName;
                img.setAttribute('data-src', img.src); 
            }

            // Add overlay if Dire is the active team and it's the ban phase
            if (activeTeam === 3 && !pickPhase && index === Object.keys(direBans).length - 1) {
                addTimeOverlay(img, activeTeamRemainingTime, radiantBonusTime, direBonusTime, activeTeam);
            }
        });

        // Update Team logos
        if (teamLogoElements.length >= 2) {
            if (!teamLogoElements[0].hasAttribute('data-src')) {
                teamLogoElements[0].src = getTeamImageUrl(radiantTeamName);
                teamLogoElements[0].setAttribute('data-src', teamLogoElements[0].src);
                teamLogoElements[0].onerror = () => {
                    teamLogoElements[0].src = './logos/placeholder.png';
                };
            }

            if (!teamLogoElements[1].hasAttribute('data-src')) {
                teamLogoElements[1].src = getTeamImageUrl(direTeamName);
                teamLogoElements[1].setAttribute('data-src', teamLogoElements[1].src);
                teamLogoElements[1].onerror = () => {
                    teamLogoElements[1].src = './logos/placeholder.png';
                };
            }
        }

        // Update Reserve Time
        if (reserveTimeElement) {
            let remainingTime = 0;

            if (activeTeam === 2) {
                remainingTime = radiantBonusTime;
            } else if (activeTeam === 3) {
                remainingTime = direBonusTime;
            }

            reserveTimeElement.textContent = formatTime(remainingTime);
            reserveTimeElement.style.color = '#162e75';
            reserveTimeElement.style.fontWeight = 'bold';
            reserveTimeElement.style.fontSize = '25px'; 
        }
    }


    // Fetch game data every 1 second
    setInterval(fetchGameData, 1000);
});


