const heroNameMapping = {
  npc_dota_hero_abaddon: "Abaddon",
  npc_dota_hero_alchemist: "Alchemist",
  npc_dota_hero_ancient_apparition: "Ancient Apparition",
  npc_dota_hero_antimage: "Anti-Mage",
  npc_dota_hero_arc_warden: "Arc Warden",
  npc_dota_hero_axe: "Axe",
  npc_dota_hero_bane: "Bane",
  npc_dota_hero_batrider: "Batrider",
  npc_dota_hero_beastmaster: "Beastmaster",
  npc_dota_hero_bloodseeker: "Bloodseeker",
  npc_dota_hero_bounty_hunter: "Bounty Hunter",
  npc_dota_hero_brewmaster: "Brewmaster",
  npc_dota_hero_bristleback: "Bristleback",
  npc_dota_hero_broodmother: "Broodmother",
  npc_dota_hero_centaur: "Centaur Warrunner",
  npc_dota_hero_chaos_knight: "Chaos Knight",
  npc_dota_hero_chen: "Chen",
  npc_dota_hero_clinkz: "Clinkz",
  npc_dota_hero_rattletrap: "Clockwerk",
  npc_dota_hero_crystal_maiden: "Crystal Maiden",
  npc_dota_hero_dark_seer: "Dark Seer",
  npc_dota_hero_dark_willow: "Dark Willow",
  npc_dota_hero_dawnbreaker: "Dawnbreaker",
  npc_dota_hero_dazzle: "Dazzle",
  npc_dota_hero_death_prophet: "Death Prophet",
  npc_dota_hero_disruptor: "Disruptor",
  npc_dota_hero_doom_bringer: "Doom",
  npc_dota_hero_dragon_knight: "Dragon Knight",
  npc_dota_hero_drow_ranger: "Drow Ranger",
  npc_dota_hero_earth_spirit: "Earth Spirit",
  npc_dota_hero_earthshaker: "Earthshaker",
  npc_dota_hero_elder_titan: "Elder Titan",
  npc_dota_hero_ember_spirit: "Ember Spirit",
  npc_dota_hero_enchantress: "Enchantress",
  npc_dota_hero_enigma: "Enigma",
  npc_dota_hero_faceless_void: "Faceless Void",
  npc_dota_hero_grimstroke: "Grimstroke",
  npc_dota_hero_gyrocopter: "Gyrocopter",
  npc_dota_hero_hoodwink: "Hoodwink",
  npc_dota_hero_huskar: "Huskar",
  npc_dota_hero_invoker: "Invoker",
  npc_dota_hero_wisp: "Io",
  npc_dota_hero_jakiro: "Jakiro",
  npc_dota_hero_juggernaut: "Juggernaut",
  npc_dota_hero_keeper_of_the_light: "Keeper of the Light",
  npc_dota_hero_kunkka: "Kunkka",
  npc_dota_hero_legion_commander: "Legion Commander",
  npc_dota_hero_leshrac: "Leshrac",
  npc_dota_hero_lich: "Lich",
  npc_dota_hero_life_stealer: "Lifestealer",
  npc_dota_hero_lina: "Lina",
  npc_dota_hero_lion: "Lion",
  npc_dota_hero_lone_druid: "Lone Druid",
  npc_dota_hero_luna: "Luna",
  npc_dota_hero_lycan: "Lycan",
  npc_dota_hero_magnataur: "Magnus",
  npc_dota_hero_marci: "Marci",
  npc_dota_hero_mars: "Mars",
  npc_dota_hero_medusa: "Medusa",
  npc_dota_hero_meepo: "Meepo",
  npc_dota_hero_mirana: "Mirana",
  npc_dota_hero_monkey_king: "Monkey King",
  npc_dota_hero_morphling: "Morphling",
  npc_dota_hero_muerta: "Muerta",
  npc_dota_hero_naga_siren: "Naga Siren",
  npc_dota_hero_furion: "Nature's Prophet",
  npc_dota_hero_necrolyte: "Necrophos",
  npc_dota_hero_night_stalker: "Night Stalker",
  npc_dota_hero_nyx_assassin: "Nyx Assassin",
  npc_dota_hero_ogre_magi: "Ogre Magi",
  npc_dota_hero_omniknight: "Omniknight",
  npc_dota_hero_oracle: "Oracle",
  npc_dota_hero_obsidian_destroyer: "Outworld Destroyer",
  npc_dota_hero_pangolier: "Pangolier",
  npc_dota_hero_phantom_assassin: "Phantom Assassin",
  npc_dota_hero_phantom_lancer: "Phantom Lancer",
  npc_dota_hero_phoenix: "Phoenix",
  npc_dota_hero_puck: "Puck",
  npc_dota_hero_pudge: "Pudge",
  npc_dota_hero_pugna: "Pugna",
  npc_dota_hero_queenofpain: "Queen of Pain",
  npc_dota_hero_razor: "Razor",
  npc_dota_hero_riki: "Riki",
  npc_dota_hero_ringmaster: "Ringmaster",
  npc_dota_hero_rubick: "Rubick",
  npc_dota_hero_sand_king: "Sand King",
  npc_dota_hero_nevermore: "Shadow Fiend",
  npc_dota_hero_shadow_shaman: "Shadow Shaman",
  npc_dota_hero_silencer: "Silencer",
  npc_dota_hero_skywrath_mage: "Skywrath Mage",
  npc_dota_hero_slardar: "Slardar",
  npc_dota_hero_slark: "Slark",
  npc_dota_hero_snapfire: "Snapfire",
  npc_dota_hero_sniper: "Sniper",
  npc_dota_hero_spectre: "Spectre",
  npc_dota_hero_spirit_breaker: "Spirit Breaker",
  npc_dota_hero_storm_spirit: "Storm Spirit",
  npc_dota_hero_sven: "Sven",
  npc_dota_hero_techies: "Techies",
  npc_dota_hero_templar_assassin: "Templar Assassin",
  npc_dota_hero_terrorblade: "Terrorblade",
  npc_dota_hero_tidehunter: "Tidehunter",
  npc_dota_hero_shredder: "Timbersaw",
  npc_dota_hero_tinker: "Tinker",
  npc_dota_hero_tiny: "Tiny",
  npc_dota_hero_treant: "Treant Protector",
  npc_dota_hero_troll_warlord: "Troll Warlord",
  npc_dota_hero_tusk: "Tusk",
  npc_dota_hero_abyssal_underlord: "Underlord",
  npc_dota_hero_undying: "Undying",
  npc_dota_hero_ursa: "Ursa",
  npc_dota_hero_vengefulspirit: "Vengeful Spirit",
  npc_dota_hero_venomancer: "Venomancer",
  npc_dota_hero_viper: "Viper",
  npc_dota_hero_visage: "Visage",
  npc_dota_hero_void_spirit: "Void Spirit",
  npc_dota_hero_warlock: "Warlock",
  npc_dota_hero_weaver: "Weaver",
  npc_dota_hero_windrunner: "Windranger",
  npc_dota_hero_winter_wyvern: "Winter Wyvern",
  npc_dota_hero_witch_doctor: "Witch Doctor",
  npc_dota_hero_wraith_king: "Wraith King",
  npc_dota_hero_zuus: "Zeus",
};

const getHeroName = (internalName) => {
  return heroNameMapping[internalName] || internalName;
};

const express = require("express");
const Dota2GSI = require("dota2-gsi");
const path = require("path");
const axios = require("axios");
const NodeCache = require("node-cache"); // Import node-cache

const app = express();
const port = 3000;
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Initialize Dota2GSI to listen for game state data on port 3001
const gsiServer = new Dota2GSI({ port: 3001 });
const validApiKeys = ["motachi6655882412"];

// Variable to hold game data and the set of known player account IDs
let gameData = {
  matchid: "",
  radiant: {
    players: {},
    score: 0,
    team_tag: "",
    team_name: "",
    series_wins: 0,
  },
  dire: {
    players: {},
    score: 0,
    team_tag: "",
    team_name: "",
    series_wins: 0,
  },
  draft: {
    activeTeam: null,
    pick: null,
    activeTeamRemainingTime: null,
    radiantBonusTime: null,
    direBonusTime: null,

    radiant: {
      picks: {
        pick1: "",
        pick2: "",
        pick3: "",
        pick4: "",
        pick5: "",
      },
      bans: {
        ban1: "",
        ban2: "",
        ban3: "",
        ban4: "",
        ban5: "",
        ban6: "",
        ban7: "",
      },
    },

    dire: {
      picks: {
        pick1: "",
        pick2: "",
        pick3: "",
        pick4: "",
        pick5: "",
      },
      bans: {
        ban1: "",
        ban2: "",
        ban3: "",
        ban4: "",
        ban5: "",
        ban6: "",
        ban7: "",
      },
    },
  },
  league: {
    name: "",
    prize_pool: "",
    series_type: "",
  },
};

// Track known account IDs
let knownAccountIds = new Set();

// Cache for storing player match data with a TTL of 20 minutes (1200 seconds)
const playerMatchDataCache = new NodeCache({ stdTTL: 1200 });
const playerHeroDataCache = new NodeCache({ stdTTL: 1200 });

// Cache for storing "not found" results
const notFoundCache = new NodeCache({ stdTTL: 0 }); // Infinite TTL
const matchIdCache = new NodeCache();

function checkAndStoreMatchId(currentMatchId) {
  const cachedMatchId = matchIdCache.get("matchid");

  if (cachedMatchId !== currentMatchId) {
    console.log("Match ID has changed. Resetting game data and caches.");
    matchIdCache.set("matchid", currentMatchId); // Store the new match ID
    resetGameData(); // Reset your game data
  }
}

function resetGameData() {
  // Reset game data and caches
  gameData.radiant.players = {};
  gameData.radiant.score = 0;
  gameData.dire.players = {};
  gameData.dire.score = 0;
  gameData.radiant.team_name = "";
  gameData.dire.team_name = "";
  gameData.dire.team_tag = "";
  gameData.radiant.team_tag = "";
  gameData.radiant.series_wins = 0;
  gameData.dire.series_wins = 0;
  (gameData.league = {
    series_type: "",
    prize_pool: 0,
    name: "",
  }),
    // Reset draft data
    (gameData.draft = {
      activeTeam: null,
      pick: null,
      activeTeamRemainingTime: null,
      radiantBonusTime: null,
      direBonusTime: null,
      radiant: {
        picks: {
          pick1: "",
          pick2: "",
          pick3: "",
          pick4: "",
          pick5: "",
        },
        bans: {
          ban1: "",
          ban2: "",
          ban3: "",
          ban4: "",
          ban5: "",
          ban6: "",
          ban7: "",
        },
      },
      dire: {
        picks: {
          pick1: "",
          pick2: "",
          pick3: "",
          pick4: "",
          pick5: "",
        },
        bans: {
          ban1: "",
          ban2: "",
          ban3: "",
          ban4: "",
          ban5: "",
          ban6: "",
          ban7: "",
        },
      },
    });

  // Also reset known account IDs
  knownAccountIds = new Set();
}

const heroes = [
  {
    name: "npc_dota_hero_antimage",
    id: 1,
  },
  {
    name: "npc_dota_hero_axe",
    id: 2,
  },
  {
    name: "npc_dota_hero_bane",
    id: 3,
  },
  {
    name: "npc_dota_hero_bloodseeker",
    id: 4,
  },
  {
    name: "npc_dota_hero_crystal_maiden",
    id: 5,
  },
  {
    name: "npc_dota_hero_drow_ranger",
    id: 6,
  },
  {
    name: "npc_dota_hero_earthshaker",
    id: 7,
  },
  {
    name: "npc_dota_hero_juggernaut",
    id: 8,
  },
  {
    name: "npc_dota_hero_mirana",
    id: 9,
  },
  {
    name: "npc_dota_hero_nevermore",
    id: 11,
  },
  {
    name: "npc_dota_hero_morphling",
    id: 10,
  },
  {
    name: "npc_dota_hero_phantom_lancer",
    id: 12,
  },
  {
    name: "npc_dota_hero_puck",
    id: 13,
  },
  {
    name: "npc_dota_hero_pudge",
    id: 14,
  },
  {
    name: "npc_dota_hero_razor",
    id: 15,
  },
  {
    name: "npc_dota_hero_sand_king",
    id: 16,
  },
  {
    name: "npc_dota_hero_storm_spirit",
    id: 17,
  },
  {
    name: "npc_dota_hero_sven",
    id: 18,
  },
  {
    name: "npc_dota_hero_tiny",
    id: 19,
  },
  {
    name: "npc_dota_hero_vengefulspirit",
    id: 20,
  },
  {
    name: "npc_dota_hero_windrunner",
    id: 21,
  },
  {
    name: "npc_dota_hero_zuus",
    id: 22,
  },
  {
    name: "npc_dota_hero_kunkka",
    id: 23,
  },
  {
    name: "npc_dota_hero_lina",
    id: 25,
  },
  {
    name: "npc_dota_hero_lich",
    id: 31,
  },
  {
    name: "npc_dota_hero_lion",
    id: 26,
  },
  {
    name: "npc_dota_hero_shadow_shaman",
    id: 27,
  },
  {
    name: "npc_dota_hero_slardar",
    id: 28,
  },
  {
    name: "npc_dota_hero_tidehunter",
    id: 29,
  },
  {
    name: "npc_dota_hero_witch_doctor",
    id: 30,
  },
  {
    name: "npc_dota_hero_riki",
    id: 32,
  },
  {
    name: "npc_dota_hero_enigma",
    id: 33,
  },
  {
    name: "npc_dota_hero_tinker",
    id: 34,
  },
  {
    name: "npc_dota_hero_sniper",
    id: 35,
  },
  {
    name: "npc_dota_hero_necrolyte",
    id: 36,
  },
  {
    name: "npc_dota_hero_warlock",
    id: 37,
  },
  {
    name: "npc_dota_hero_beastmaster",
    id: 38,
  },
  {
    name: "npc_dota_hero_queenofpain",
    id: 39,
  },
  {
    name: "npc_dota_hero_venomancer",
    id: 40,
  },
  {
    name: "npc_dota_hero_faceless_void",
    id: 41,
  },
  {
    name: "npc_dota_hero_skeleton_king",
    id: 42,
  },
  {
    name: "npc_dota_hero_death_prophet",
    id: 43,
  },
  {
    name: "npc_dota_hero_phantom_assassin",
    id: 44,
  },
  {
    name: "npc_dota_hero_pugna",
    id: 45,
  },
  {
    name: "npc_dota_hero_templar_assassin",
    id: 46,
  },
  {
    name: "npc_dota_hero_viper",
    id: 47,
  },
  {
    name: "npc_dota_hero_luna",
    id: 48,
  },
  {
    name: "npc_dota_hero_dragon_knight",
    id: 49,
  },
  {
    name: "npc_dota_hero_dazzle",
    id: 50,
  },
  {
    name: "npc_dota_hero_rattletrap",
    id: 51,
  },
  {
    name: "npc_dota_hero_leshrac",
    id: 52,
  },
  {
    name: "npc_dota_hero_furion",
    id: 53,
  },
  {
    name: "npc_dota_hero_life_stealer",
    id: 54,
  },
  {
    name: "npc_dota_hero_dark_seer",
    id: 55,
  },
  {
    name: "npc_dota_hero_clinkz",
    id: 56,
  },
  {
    name: "npc_dota_hero_omniknight",
    id: 57,
  },
  {
    name: "npc_dota_hero_enchantress",
    id: 58,
  },
  {
    name: "npc_dota_hero_huskar",
    id: 59,
  },
  {
    name: "npc_dota_hero_night_stalker",
    id: 60,
  },
  {
    name: "npc_dota_hero_broodmother",
    id: 61,
  },
  {
    name: "npc_dota_hero_bounty_hunter",
    id: 62,
  },
  {
    name: "npc_dota_hero_weaver",
    id: 63,
  },
  {
    name: "npc_dota_hero_jakiro",
    id: 64,
  },
  {
    name: "npc_dota_hero_batrider",
    id: 65,
  },
  {
    name: "npc_dota_hero_chen",
    id: 66,
  },
  {
    name: "npc_dota_hero_spectre",
    id: 67,
  },
  {
    name: "npc_dota_hero_doom_bringer",
    id: 69,
  },
  {
    name: "npc_dota_hero_ancient_apparition",
    id: 68,
  },
  {
    name: "npc_dota_hero_ursa",
    id: 70,
  },
  {
    name: "npc_dota_hero_spirit_breaker",
    id: 71,
  },
  {
    name: "npc_dota_hero_gyrocopter",
    id: 72,
  },
  {
    name: "npc_dota_hero_alchemist",
    id: 73,
  },
  {
    name: "npc_dota_hero_invoker",
    id: 74,
  },
  {
    name: "npc_dota_hero_silencer",
    id: 75,
  },
  {
    name: "npc_dota_hero_obsidian_destroyer",
    id: 76,
  },
  {
    name: "npc_dota_hero_lycan",
    id: 77,
  },
  {
    name: "npc_dota_hero_brewmaster",
    id: 78,
  },
  {
    name: "npc_dota_hero_shadow_demon",
    id: 79,
  },
  {
    name: "npc_dota_hero_lone_druid",
    id: 80,
  },
  {
    name: "npc_dota_hero_chaos_knight",
    id: 81,
  },
  {
    name: "npc_dota_hero_meepo",
    id: 82,
  },
  {
    name: "npc_dota_hero_treant",
    id: 83,
  },
  {
    name: "npc_dota_hero_ogre_magi",
    id: 84,
  },
  {
    name: "npc_dota_hero_undying",
    id: 85,
  },
  {
    name: "npc_dota_hero_rubick",
    id: 86,
  },
  {
    name: "npc_dota_hero_disruptor",
    id: 87,
  },
  {
    name: "npc_dota_hero_nyx_assassin",
    id: 88,
  },
  {
    name: "npc_dota_hero_naga_siren",
    id: 89,
  },
  {
    name: "npc_dota_hero_keeper_of_the_light",
    id: 90,
  },
  {
    name: "npc_dota_hero_wisp",
    id: 91,
  },
  {
    name: "npc_dota_hero_visage",
    id: 92,
  },
  {
    name: "npc_dota_hero_slark",
    id: 93,
  },
  {
    name: "npc_dota_hero_medusa",
    id: 94,
  },
  {
    name: "npc_dota_hero_troll_warlord",
    id: 95,
  },
  {
    name: "npc_dota_hero_centaur",
    id: 96,
  },
  {
    name: "npc_dota_hero_magnataur",
    id: 97,
  },
  {
    name: "npc_dota_hero_shredder",
    id: 98,
  },
  {
    name: "npc_dota_hero_bristleback",
    id: 99,
  },
  {
    name: "npc_dota_hero_tusk",
    id: 100,
  },
  {
    name: "npc_dota_hero_skywrath_mage",
    id: 101,
  },
  {
    name: "npc_dota_hero_abaddon",
    id: 102,
  },
  {
    name: "npc_dota_hero_elder_titan",
    id: 103,
  },
  {
    name: "npc_dota_hero_legion_commander",
    id: 104,
  },
  {
    name: "npc_dota_hero_ember_spirit",
    id: 106,
  },
  {
    name: "npc_dota_hero_earth_spirit",
    id: 107,
  },
  {
    name: "npc_dota_hero_terrorblade",
    id: 109,
  },
  {
    name: "npc_dota_hero_phoenix",
    id: 110,
  },
  {
    name: "npc_dota_hero_oracle",
    id: 111,
  },
  {
    name: "npc_dota_hero_techies",
    id: 105,
  },
  {
    name: "npc_dota_hero_winter_wyvern",
    id: 112,
  },
  {
    name: "npc_dota_hero_arc_warden",
    id: 113,
  },

  {
    name: "npc_dota_hero_monkey_king",
    id: 114,
  },
  {
    name: "npc_dota_hero_dark_willow",
    id: 119,
  },
  {
    name: "npc_dota_hero_pangolier",
    id: 120,
  },
  {
    name: "npc_dota_hero_grimstroke",
    id: 121,
  },
  {
    name: "npc_dota_hero_hoodwink",
    id: 123,
  },
  {
    name: "npc_dota_hero_void_spirit",
    id: 126,
  },
  {
    name: "npc_dota_hero_snapfire",
    id: 128,
  },
  {
    name: "npc_dota_hero_mars",
    id: 129,
  },
  {
    name: "npc_dota_hero_dawnbreaker",
    id: 135,
  },
  {
    name: "npc_dota_hero_marci",
    id: 136,
  },
  {
    name: "npc_dota_hero_primal_beast",
    id: 137,
  },
  {
    name: "npc_dota_hero_muerta",
    id: 138,
  },
  {
    name: "npc_dota_hero_abyssal_underlord",
    id: 108,
  },
];

const heroMap = new Map();
heroes.forEach((hero) => {
  heroMap.set(hero.id, hero.name);
});

// Function to get hero name by hero_id
function getHeroNameById(heroId) {
  return heroMap.get(heroId) || "Unknown Hero";
}

// Function to fetch recent matches and calculate the average kills, deaths, and duration
async function fetchAvgStats(accountId) {
  if (notFoundCache.get(accountId)) {
    // If this account ID is in the "not found" cache, return default stats
    return { avgKills: 0, avgDeaths: 0, avgDuration: 0 };
  }

  let cachedData = playerMatchDataCache.get(accountId);
  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await axios.get(
      `https://api.opendota.com/api/players/${accountId}/recentMatches?api_key=8b0e0b9d-ef94-4752-95c9-3aecfb0e95c3`
    );
    const matches = response.data;

    if (!Array.isArray(matches) || matches.length === 0) {
      const defaultStats = { avgKills: 0, avgDeaths: 0, avgDuration: 0 };
      playerMatchDataCache.set(accountId, defaultStats);
      notFoundCache.set(accountId, true); // Cache this account ID as "not found"
      return defaultStats;
    }

    const validMatches = matches.filter((match) => match.duration >= 1200);

    if (validMatches.length === 0) {
      const defaultStats = { avgKills: 0, avgDeaths: 0, avgDuration: 0 };
      playerMatchDataCache.set(accountId, defaultStats);
      notFoundCache.set(accountId, true); // Cache this account ID as "not found"
      return defaultStats;
    }

    const totalKills = validMatches.reduce(
      (sum, match) => sum + match.kills,
      0
    );
    const totalDeaths = validMatches.reduce(
      (sum, match) => sum + match.deaths,
      0
    );
    const totalDuration = validMatches.reduce(
      (sum, match) => sum + match.duration,
      0
    );

    const avgKills = totalKills / validMatches.length;
    const avgDeaths = totalDeaths / validMatches.length;
    const avgDuration = totalDuration / validMatches.length;

    const stats = { avgKills, avgDeaths, avgDuration };
    playerMatchDataCache.set(accountId, stats);

    return stats;
  } catch (error) {
    console.error(`Error fetching data for account ID ${accountId}:`, error);
    const defaultStats = { avgKills: 0, avgDeaths: 0, avgDuration: 0 };
    playerMatchDataCache.set(accountId, defaultStats);
    notFoundCache.set(accountId, true); // Cache this account ID as "not found"
    return defaultStats;
  }
}

// Function to fetch and cache top heroes for a player
async function fetchTopHeroes(accountId) {
  if (notFoundCache.get(accountId)) {
    // If this account ID is in the "not found" cache, return empty hero data
    return [];
  }

  let cachedHeroes = playerHeroDataCache.get(accountId);
  if (cachedHeroes) {
    return cachedHeroes;
  }

  try {
    const response = await axios.get(
      `https://api.opendota.com/api/players/${accountId}/heroes?api_key=8b0e0b9d-ef94-4752-95c9-3aecfb0e95c3`
    );
    const heroes = response.data;

    if (!Array.isArray(heroes) || heroes.length === 0) {
      const emptyHeroData = [];
      playerHeroDataCache.set(accountId, emptyHeroData);
      notFoundCache.set(accountId, true); // Cache this account ID as "not found"
      return emptyHeroData;
    }

    const topHeroes = heroes
      .sort((a, b) => b.games - a.games) // Sort heroes by number of games in descending order
      .slice(0, 5) // Get top 5 heroes
      .map((hero) => {
        const losses = hero.games - hero.win;
        const winRate =
          hero.games > 0 ? ((hero.win / hero.games) * 100).toFixed(2) : "0.00";

        return {
          name: getHeroNameById(hero.hero_id),
          games: hero.games,
          wins: hero.win,
          losses: losses,
          winRate: `${winRate}%`,
        };
      });

    // Update the cache with the top heroes data
    playerHeroDataCache.set(accountId, topHeroes);

    return topHeroes;
  } catch (error) {
    console.error(
      `Error fetching hero data for account ID ${accountId}:`,
      error
    );
    const emptyHeroData = {};
    playerHeroDataCache.set(accountId, emptyHeroData);
    notFoundCache.set(accountId, true); // Cache this account ID as "not found"
    return emptyHeroData;
  }
}

// GSI SERVER
gsiServer.events.on("newclient", (client) => {
  console.log("New GSI client connected");

  client.on("newdata", async (data) => {
    if (data && data.auth && data.auth.token) {
      const apiKey = data.auth.token;

      if (!validApiKeys.includes(apiKey)) {
        console.log("Client authentication failed");

        return;
      } else {
        console.log("Client authenticated successfully");
      }
    } else {
      console.log("No API key provided");
      return;
    }

    console.log("GSI data received:", data);
    if (data.draft) {
      const draftData = data.draft;

      gameData.draft = gameData.draft || {};
      gameData.draft.activeTeam = draftData.activeteam;
      gameData.draft.pick = draftData.pick;
      gameData.draft.activeTeamRemainingTime =
        draftData.activeteam_time_remaining;
      gameData.draft.radiantBonusTime = draftData.radiant_bonus_time;
      gameData.draft.direBonusTime = draftData.dire_bonus_time;

      // Populate radiant picks and bans
      if (draftData.team2) {
        for (let i = 0; i < 5; i++) {
          // Iterate over picks
          const pickId = draftData.team2[`pick${i}_id`];
          if (pickId && pickId !== 0) {
            gameData.draft.radiant.picks[`pick${i + 1}`] =
              getHeroNameById(pickId);
          }
        }

        for (let i = 0; i < 7; i++) {
          // Iterate over bans
          const banId = draftData.team2[`ban${i}_id`];
          if (banId && banId !== 0) {
            gameData.draft.radiant.bans[`ban${i + 1}`] = getHeroNameById(banId);
          }
        }
      }

      // Populate dire picks and bans
      if (draftData.team3) {
        for (let i = 0; i < 5; i++) {
          // Iterate over picks
          const pickId = draftData.team3[`pick${i}_id`];
          if (pickId && pickId !== 0) {
            gameData.draft.dire.picks[`pick${i + 1}`] = getHeroNameById(pickId);
          }
        }

        for (let i = 0; i < 7; i++) {
          // Iterate over bans
          const banId = draftData.team3[`ban${i}_id`];
          if (banId && banId !== 0) {
            gameData.draft.dire.bans[`ban${i + 1}`] = getHeroNameById(banId);
          }
        }
      }
    }

    // Set to track current player account IDs
    const currentAccountIds = new Set();

    const teams = ["team2", "team3"];
    for (const [index, team] of teams.entries()) {
      const teamName = index === 0 ? "radiant" : "dire";
      if (data.player && data.player[team]) {
        for (const playerKey of Object.keys(data.player[team])) {
          const player = data.player[team][playerKey];
          const hero =
            (data.hero && data.hero[team] && data.hero[team][playerKey]) || {}; // Extract hero data

          // Add player account ID to the current set
          if (player.accountid) {
            currentAccountIds.add(player.accountid);
          }

          // const { avgKills, avgDeaths, avgDuration } = player.accountid
          //   ? await fetchAvgStats(player.accountid)
          //   : { avgKills: 0, avgDeaths: 0, avgDuration: 0 };

          // const topHeroes = player.accountid
          //   ? await fetchTopHeroes(player.accountid)
          //   : {};

          const playerData = gameData[teamName].players[player.accountid] || {
            name: player.name || "Unknown",
            accountid: player.accountid || "Unknown",
            level: hero.level || 0,
            gold: player.gold || 0,
            net_worth: player.net_worth || 0,
            kills: player.kills || 0,
            deaths: player.deaths || 0,
            assists: player.assists || 0,
            ult_ready: player.ult_ready || false,
            hero_name: getHeroName(hero.name) || "Unknown",
            hero_npc_name: hero.name || "Unknown",
            killstreak: player.kill_streak || 0,
            wards_placed: player.wards_placed || 0,
            wards_destroyed: player.wards_destroyed || 0,
            hero_damage: player.hero_damage || 0,
            hero_healing: player.hero_healing || 0,
            gold_lost_death: player.gold_lost_to_death || 0,
            gold_from_hero: player.gold_from_hero_kills || 0,
            gold_from_creeps: player.gold_from_creep_kills || 0,
            gold_from_passive: player.gold_from_income || 0,
            gold_from_assist: player.gold_from_shared || 0,
            tower_damage: player.tower_damage || 0,
            camps_stacked: player.camps_stacked || 0,
            selected_unit: hero.selected_unit,
            experience: hero.xp || 0,
            last_hits: player.last_hits || 0,
            denies: player.denies || 0,
            // avgkill_20: avgKills,
            // avg_death: avgDeaths,
            // avg_duration: avgDuration,
            // top_heroes: topHeroes,
          };

          gameData[teamName].players[player.accountid] = {
            ...playerData,
            level: hero.level || 0,
            gold: player.gold || 0,
            net_worth: player.net_worth || 0,
            kills: player.kills || 0,
            deaths: player.deaths || 0,
            assists: player.assists || 0,
            ult_ready: player.ult_ready || false,
            hero_name: getHeroName(hero.name) || "Unknown",
            hero_npc_name: hero.name || "Unknown",
            killstreak: player.kill_streak || 0,
            wards_placed: player.wards_placed || 0,
            wards_destroyed: player.wards_destroyed || 0,
            hero_damage: player.hero_damage || 0,
            hero_healing: player.hero_healing || 0,
            gold_lost_death: player.gold_lost_to_death || 0,
            gold_from_hero: player.gold_from_hero_kills || 0,
            gold_from_creeps: player.gold_from_creep_kills || 0,
            gold_from_passive: player.gold_from_income || 0,
            gold_from_assist: player.gold_from_shared || 0,
            tower_damage: player.tower_damage || 0,
            camps_stacked: player.camps_stacked || 0,
            selected_unit: hero.selected_unit,
            experience: hero.xp || 0,
            last_hits: player.last_hits || 0,
            denies: player.denies || 0,
            // avgkill_20: avgKills,
            // avg_death: avgDeaths,
            // avg_duration: avgDuration,
            // top_heroes: topHeroes,
          };
        }
      } else {
        console.warn(`No player data available for ${team}`);
      }
    }

    if (data.map && data.map.matchid) {
      const currentMatchId = data.map.matchid;
      checkAndStoreMatchId(currentMatchId);
      gameData.radiant.score = data.map.radiant_score || 0;
      gameData.dire.score = data.map.dire_score || 0;
      gameData.matchid = data.map.matchid || "Unknown";
    }

    if (data.league && data.league.radiant && data.league.dire) {
      gameData.radiant.team_name = data.league.radiant.name || "Unknown";
      gameData.radiant.team_tag = data.league.radiant.team_tag || "Unknown";
      gameData.dire.team_name = data.league.dire.name || "Unknown";
      gameData.dire.team_tag = data.league.dire.team_tag || "Unknown";
      gameData.league.series_type = data.league.series_type || "Unknown";
      gameData.league.name = data.league.name || "Unknows";
      gameData.league.prize_pool = data.league.total_prize_pool || 0;
      gameData.dire.series_wins = data.league.dire.series_wins || 0;
      gameData.radiant.series_wins = data.league.radiant.series_wins || 0;
    }
  });
});

// Function to check if two sets are equal
function areSetsEqual(setA, setB) {
  if (setA.size !== setB.size) return false;
  for (let item of setA) {
    if (!setB.has(item)) return false;
  }
  return true;
}

// Endpoint to serve the game data to the overlay
app.get("/game-data", (req, res) => {
  const formattedData = {
    matchid: gameData.matchid,
    radiant: {
      players: Object.values(gameData.radiant.players),
      score: gameData.radiant.score, // Include score
      team_name: gameData.radiant.team_name,
      team_tag: gameData.radiant.team_tag,
      series_wins: gameData.radiant.series_wins,
    },
    dire: {
      players: Object.values(gameData.dire.players),
      score: gameData.dire.score, // Include score
      team_name: gameData.dire.team_name,
      team_tag: gameData.dire.team_tag,
      series_wins: gameData.dire.series_wins,
    },
    draft: gameData.draft, // Include draft data

    league: {
      series_type: gameData.league.series_type,
      name: gameData.league.name,
      prize_pool: gameData.league.prize_pool,
    },
  };

  res.json(formattedData);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
