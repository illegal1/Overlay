// Hero name mapping
const heroNameMapping = {
  npc_dota_hero_abyssal_underlord: "Underlord",
  npc_dota_hero_mars: "Mars",
  npc_dota_hero_pangolier: "Pangolier",
  npc_dota_hero_hoodwink: "HoodWink",
  npc_dota_hero_monkey_king: "Monkey King",
  npc_dota_hero_windrunner: "Windranger",
  npc_dota_hero_batrider: "Batrider",
  npc_dota_hero_centaur: "Centaur",
  npc_dota_hero_shredder: "Timbersaw",
  npc_dota_hero_sniper: "Sniper",
  npc_dota_hero_ringmaster: "Ringmaster",
  npc_dota_hero_primal_beast: "Primal Beast",
  npc_dota_hero_marci: "Marci",
  npc_dota_hero_alchemist: "Alchemist",
  npc_dota_hero_ancient_apparition: "Ancient Apparition",
  npc_dota_hero_antimage: "Anti-Mage",
  npc_dota_hero_axe: "Axe",
  npc_dota_hero_bane: "Bane",
  npc_dota_hero_bloodseeker: "Bloodseeker",
  npc_dota_hero_crystal_maiden: "Crystal Maiden",
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
  npc_dota_hero_gyrocopter: "Gyrocopter",
  npc_dota_hero_huskar: "Huskar",
  npc_dota_hero_invoker: "Invoker",
  npc_dota_hero_jakiro: "Jakiro",
  npc_dota_hero_juggernaut: "Juggernaut",
  npc_dota_hero_keeper_of_the_light: "Keeper of the Light",
  npc_dota_hero_kunkka: "Kunkka",
  npc_dota_hero_legion_commander: "Legion Commander",
  npc_dota_hero_leshrac: "Leshrac",
  npc_dota_hero_lich: "Lich",
  npc_dota_hero_lifestealer: "Lifestealer",
  npc_dota_hero_lina: "Lina",
  npc_dota_hero_lion: "Lion",
  npc_dota_hero_lycan: "Lycan",
  npc_dota_hero_magnus: "Magnus",
  npc_dota_hero_medusa: "Medusa",
  npc_dota_hero_meepo: "Meepo",
  npc_dota_hero_mirana: "Mirana",
  npc_dota_hero_morphling: "Morphling",
  npc_dota_hero_naga_siren: "Naga Siren",
  npc_dota_hero_nature_prophet: "Nature's Prophet",
  npc_dota_hero_necrophos: "Necrophos",
  npc_dota_hero_night_stalker: "Night Stalker",
  npc_dota_hero_nyx_assassin: "Nyx Assassin",
  npc_dota_hero_ogre_magi: "Ogre Magi",
  npc_dota_hero_omniknight: "Omniknight",
  npc_dota_hero_oracle: "Oracle",
  npc_dota_hero_phantom_assassin: "Phantom Assassin",
  npc_dota_hero_phantom_lancer: "Phantom Lancer",
  npc_dota_hero_pugna: "Pugna",
  npc_dota_hero_queen_of_pain: "Queen of Pain",
  npc_dota_hero_riki: "Riki",
  npc_dota_hero_sand_king: "Sand King",
  npc_dota_hero_shadow_demon: "Shadow Demon",
  npc_dota_hero_shadow_fiend: "Shadow Fiend",
  npc_dota_hero_shadow_shaman: "Shadow Shaman",
  npc_dota_hero_silencer: "Silencer",
  npc_dota_hero_skywrath_mage: "Skywrath Mage",
  npc_dota_hero_slardar: "Slardar",
  npc_dota_hero_slark: "Slark",
  npc_dota_hero_sven: "Sven",
  npc_dota_hero_techies: "Techies",
  npc_dota_hero_templar_assassin: "Templar Assassin",
  npc_dota_hero_terrorblade: "Terrorblade",
  npc_dota_hero_tidehunter: "Tidehunter",
  npc_dota_hero_tinker: "Tinker",
  npc_dota_hero_tiny: "Tiny",
  npc_dota_hero_treant: "Treant Protector",
  npc_dota_hero_troll_warlord: "Troll Warlord",
  npc_dota_hero_tusk: "Tusk",
  npc_dota_hero_undying: "Undying",
  npc_dota_hero_ursa: "Ursa",
  npc_dota_hero_vengeful_spirit: "Vengeful Spirit",
  npc_dota_hero_venomancer: "Venomancer",
  npc_dota_hero_viper: "Viper",
  npc_dota_hero_visage: "Visage",
  npc_dota_hero_warlock: "Warlock",
  npc_dota_hero_weaver: "Weaver",
  npc_dota_hero_windranger: "Windranger",
  npc_dota_hero_winter_wyvern: "Winter Wyvern",
  npc_dota_hero_wisp: "Wisp",
  npc_dota_hero_zuus: "Zeus",
  npc_dota_hero_chaos_knight: "Chaos Knight",
  npc_dota_hero_beastmaster: "Beast Master",
  npc_dota_hero_furion: "Nature Prophet",
  npc_dota_hero_void_spirit: "Void Spirit",
  npc_dota_hero_rubick: "Rubick",
  npc_dota_hero_dawnbreaker: "Dawnbreaker",
};

const getHeroImageUrl = (heroName) => {
  const heroFileName = heroName.replace("npc_dota_hero_", "");

  return `https://cdn.stratz.com/images/dota2/heroes/${heroFileName}_horz.png`;
};

// Function to get human-readable hero name
const getHeroName = (internalName) => {
  return heroNameMapping[internalName] || internalName;
};

// Function to create a player table row
const createPlayerRow = (player) => {
  const row = document.createElement("tr");

  row.innerHTML = `
	<td><img src="${getHeroImageUrl(
    player.hero_name
  )}" class="img-fluid rounded-start" alt="${getHeroName(
    player.hero_name
  )}" style="width: 150px;"></td>
        <td class="player-name">
            ${player.name || "Unknown"} <br>
            <span style="color: grey; font-size: smaller;">
                ${getHeroName(player.hero_name)}
            </span>
        </td>
        
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

// Function to create a player card
const createPlayerCard = (player) => {
  // Function to generate top heroes section
  const generateTopHeroesSection = () => {
    if (player.top_heroes && player.top_heroes.length > 0) {
      return `
                <div class="row mt-2">
                    <div class="col-md-12">
                        <p class="card-text">
                            <div class="row">
                                ${player.top_heroes
                                  .map(
                                    (hero, index) => `
                                    <div class="col-md-2">
                                        <img src="${getHeroImageUrl(
                                          hero.name
                                        )}" width="80" height="auto" class="img-fluid rounded-start" alt="${
                                      hero.name
                                    }">
                                        <div>${hero.winRate || 0}</div>
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                        </p>
                    </div>
                </div>
            `;
    }
    return "";
  };
  return `
        <div class="card text-white bg-dark mb-3">
            <div class="row g-0">
                <div class="col-md-3">
                    <img src="${getHeroImageUrl(
                      player.hero_name
                    )}" class="img-fluid rounded-start" alt="${getHeroName(
    player.hero_name
  )}">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h5 class="card-title">${
                          player.name || "Unknown"
                        } &nbsp; &nbsp; &nbsp; <span class="circle">${
    player.level || 0
  }</span></h5>
                    
                        <div class="row">
                            <div class="col-md-6">
                                <p class="card-text">
                                    <svg fill="grey" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 57 57" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M57,0h-8.837L18.171,29.992l-4.076-4.076l-1.345-4.034c-0.22-0.663-0.857-1.065-1.55-0.98 c-0.693,0.085-1.214,0.63-1.268,1.327l-0.572,7.438l5.982,5.982L4.992,46H2.274C1.02,46,0,47.02,0,48.274v6.452 C0,55.98,1.02,57,2.274,57h6.452C9.98,57,11,55.98,11,54.726v-3.421l10-10l6.021,6.021l6.866-1.145 c0.685-0.113,1.182-0.677,1.21-1.37c0.028-0.693-0.422-1.295-1.096-1.464l-3.297-0.824l-4.043-4.043L57,8.489V0z M9,54.726 C9,54.877,8.877,55,8.726,55H2.274C2.123,55,2,54.877,2,54.726v-6.452C2,48.123,2.123,48,2.274,48h0.718h5.734 C8.877,48,9,48.123,9,48.274v5.031V54.726z M11,48.477v-0.203C11,47.02,9.98,46,8.726,46H7.82l8.938-8.938l1.417,1.417l1.411,1.411 L11,48.477z M30.942,44.645l-3.235,0.54l-5.293-5.293l0,0l-2.833-2.833l-8.155-8.155l0.292-3.796l0.63,1.89l4.41,4.41l0,0 l4.225,4.225l8.699,8.699L30.942,44.645z M25.247,37.066l-2.822-2.822l-2.839-2.839L48.991,2h4.243L23.829,31.406 c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293L55,3.062v4.592L25.247,37.066z"></path> </g></svg>
                                    K/D/A: <strong>${player.kills || 0}/${
    player.deaths || 0
  }/${player.assists || 0}</strong>
                                </p>
                            </div>
                            <div class="col-md-6">
                                <p class="card-text">
                                    Average Kill/Death: <strong>${0}/${0}</strong>
                                </p>
                            </div>
                        </div>
                    
                        <div class="row">
                            <div class="col-md-6">
                                <p class="card-text">
                                    <svg width="25px" height="25px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="grey"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M959.849 634.644c-1.641-76.786-201.052-97.358-319.152-97.358s-317.509 20.572-319.152 97.358h-0.151v99.162c0 77.374 200.715 98.006 319.303 98.006 118.59 0 319.303-20.75 319.303-98.464v-98.703h-0.151z" fill="#FCB814"></path><path d="M959.849 634.644c-1.641-76.786-201.052-97.358-319.152-97.358s-317.509 20.572-319.152 97.358h-0.151v99.162c0 77.374 200.715 98.006 319.303 98.006 118.59 0 319.303-20.75 319.303-98.464v-98.703h-0.151z" fill=""></path><path d="M640.697 733.78c-118.588 0-319.303-20.675-319.303-98.222 0-77.571 200.715-98.272 319.303-98.272S960 557.987 960 635.558c0 77.547-200.715 98.222-319.303 98.222z" fill="#FCB814"></path><path d="M837.826 455.421c-1.641-76.786-201.052-97.356-319.152-97.356s-317.51 20.57-319.152 97.356h-0.151v99.162c0 77.376 200.714 98.006 319.303 98.006 118.588 0 319.303-20.75 319.303-98.463v-98.705h-0.151z" fill="#FCB814"></path><path d="M837.826 455.421c-1.641-76.786-201.052-97.356-319.152-97.356s-317.51 20.57-319.152 97.356h-0.151v99.162c0 77.376 200.714 98.006 319.303 98.006 118.588 0 319.303-20.75 319.303-98.463v-98.705h-0.151z" fill=""></path><path d="M518.674 554.559c-118.59 0-319.303-20.677-319.303-98.223 0-77.571 200.713-98.272 319.303-98.272 118.588 0 319.303 20.701 319.303 98.272 0 77.547-200.715 98.223-319.303 98.223z" fill="#FCB814"></path><path d="M702.457 289.547c-1.642-76.786-201.052-97.358-319.152-97.358S65.794 212.761 64.153 289.547h-0.15v99.162c0 77.374 200.713 98.006 319.303 98.006 118.589 0 319.303-20.75 319.303-98.464v-98.703h-0.152z" fill="#FCB814"></path><path d="M702.457 289.547c-1.642-76.786-201.052-97.358-319.152-97.358S65.794 212.761 64.153 289.547h-0.15v99.162c0 77.374 200.713 98.006 319.303 98.006 118.589 0 319.303-20.75 319.303-98.464v-98.703h-0.152z" fill=""></path><path d="M383.305 388.682c-118.589 0-319.303-20.678-319.303-98.224 0-77.571 200.714-98.272 319.303-98.272 118.59 0 319.303 20.701 319.303 98.272 0 77.547-200.713 98.224-319.303 98.224z" fill="#FCB814"></path><path d="M630.182 566.207c-14.705 0-26.637-11.932-26.637-26.638V357.527c0-14.705 11.932-26.637 26.637-26.637 14.705 0 26.637 11.932 26.637 26.637v182.042c0 14.706-11.932 26.638-26.637 26.638z" fill="#FCB814"></path><path d="M398.076 566.207c-14.705 0-26.637-11.932-26.637-26.638V357.527c0-14.705 11.932-26.637 26.637-26.637s26.637 11.932 26.637 26.637v182.042c0 14.706-11.932 26.638-26.637 26.638z" fill="#FCB814"></path></g></svg>
                                    Net Worth: <strong>${
                                      player.net_worth || 0
                                    }</strong>
                                </p>
                            </div>
                            <div class="col-md-6">
                                <p class="card-text">
                                    Gold Lost To Death: <strong>${
                                      player.gold_lost_death || 0
                                    }</strong>
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <p class="card-text">
                                    <svg fill="grey" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="grey">&lt; id="SVGRepo_bCarrier" stroke-width="0"&gt;&lt; id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"&gt;&lt; id="SVGRepo_iconCarrier"&gt; <title>damae_kinetic</title> <path d="M30.83 30.773c-0.233 0.070-0.349-0.045-0.473-0.103-3.406-1.623-6.832-3.204-10.115-5.071-0.091-0.052-0.204-0.108-0.32-0.157l-0.023-0.009c-0.559-0.237-0.816-0.158-1.126 0.378-0.126 0.221-0.261 0.494-0.381 0.774l-0.022 0.057c-0.74 1.654-1.474 3.312-2.218 4.966-0.057 0.127-0.080 0.284-0.251 0.391-0.273-0.571-0.546-1.131-0.809-1.695q-0.958-2.044-1.913-4.091c-0.085-0.19-0.169-0.347-0.263-0.498l0.010 0.018c-0.263-0.417-0.558-0.517-1.019-0.334-0.212 0.095-0.387 0.187-0.555 0.288l0.023-0.013c-3.301 1.791-6.633 3.523-9.956 5.261-0.063 0.052-0.145 0.083-0.234 0.083-0.010 0-0.021-0-0.031-0.001l0.001 0c-0.121-0.129 0.028-0.23 0.072-0.328 1.607-3.452 3.185-6.92 5.092-10.223 0.045-0.079 0.090-0.158 0.127-0.241 0.29-0.655 0.116-1.128-0.546-1.42-0.614-0.27-1.242-0.508-1.856-0.785-1.351-0.608-2.697-1.238-4.045-1.859 0.062-0.218 0.249-0.226 0.387-0.292q2.621-1.253 5.259-2.493c0.082-0.039 0.166-0.074 0.247-0.109 0.805-0.399 0.914-0.724 0.476-1.506-1.044-1.879-2.038-3.776-3.025-5.675q-1.168-2.244-2.322-4.497c-0.052-0.102-0.166-0.194-0.12-0.337 0.166-0.076 0.282 0.050 0.402 0.109 3.435 1.643 6.88 3.268 10.206 5.132 0.015 0.009 0.028 0.022 0.045 0.031 0.848 0.455 1.158 0.359 1.565-0.531 0.835-1.83 1.658-3.668 2.486-5.502 0.073-0.161 0.102-0.348 0.293-0.494 0.347 0.764 0.689 1.512 1.026 2.263q0.793 1.762 1.579 3.526c0.029 0.067 0.059 0.133 0.090 0.199 0.429 0.914 0.764 1.024 1.659 0.52 3.286-1.856 6.661-3.544 10.026-5.251 0.091-0.046 0.175-0.129 0.299-0.109 0.073 0.161-0.053 0.275-0.109 0.394-1.604 3.434-3.193 6.88-5.051 10.185-0.009 0.016-0.022 0.030-0.029 0.046-0.442 0.835-0.358 1.136 0.507 1.529 1.849 0.842 3.664 1.754 5.485 2.652l0.302 0.156c-0.074 0.204-0.278 0.212-0.427 0.278-1.719 0.775-3.443 1.54-5.164 2.31-1.092 0.488-1.192 0.794-0.608 1.826 1.896 3.352 3.598 6.8 5.346 10.251zM7.572 7.754c-0.016-0.050-0.055-0.091-0.094-0.046s0.007 0.074 0.056 0.082c0.048 0.312 0.236 0.566 0.376 0.835 0.954 1.856 1.92 3.698 2.887 5.556-1.27 0.604-2.537 1.208-3.858 1.838 1.31 0.681 2.602 1.239 3.88 1.821-1.192 2.14-2.203 4.307-3.167 6.494l0.095 0.079c2.1-1.104 4.2-2.207 6.321-3.323l1.866 3.943 1.78-3.957c2.146 1.179 4.311 2.206 6.544 3.218-0.012-0.071-0.027-0.133-0.045-0.193l0.003 0.010c-0.988-1.981-1.973-3.962-3.040-5.897-0.218-0.398-0.218-0.399 0.211-0.592 0.828-0.369 1.659-0.733 2.484-1.107 0.287-0.131 0.596-0.218 0.915-0.463l-3.81-1.876q1.778-3.23 3.267-6.574c-2.218 1.052-4.383 2.141-6.536 3.336l-1.823-4.040c-0.624 1.377-1.22 2.691-1.824 4.024-1.92-1.064-3.853-1.983-5.788-2.893-0.227-0.104-0.439-0.259-0.701-0.276z"></path> <path d="M15.906 12.777c1.75 0.009 3.165 1.43 3.165 3.181 0 1.757-1.424 3.181-3.181 3.181s-3.181-1.424-3.181-3.181c0-0 0-0.001 0-0.001v0c0.006-1.758 1.432-3.18 3.191-3.18 0.002 0 0.005 0 0.007 0h-0zM16.799 15.935c-0.012-0.483-0.406-0.871-0.891-0.871-0.492 0-0.891 0.399-0.891 0.891 0 0.007 0 0.015 0 0.022l-0-0.001c0.019 0.48 0.413 0.863 0.896 0.863 0.015 0 0.030-0 0.044-0.001l-0.002 0c0.473-0.034 0.844-0.426 0.844-0.905 0 0 0-0 0-0v0z"></path></svg>
                                    Hero Damage: <strong>${
                                      player.hero_damage || 0
                                    }</strong>
                                </p>
                            </div>
                            <div class="col-md-6">
                                <p class="card-text">
                                    <svg fill="grey" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="grey"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>tower</title> <path d="M28.282 30.628l-1.791-5.793h-2.456v-11.772l3.816-4.731v-6.934h-4.020v3.27h-2.447v-3.27h-4.064v3.27h-2.403v-3.27h-4.064v3.27h-2.403v-3.27h-4.020v6.934l3.816 4.731v11.772h-2.456l-1.791 5.793z"></path> </g></svg>
                                    Tower Damage: <strong>${
                                      player.tower_damage || 0
                                    }</strong>
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <p class="card-text">
                                    <svg fill="grey" height="20px" width="20px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" xml:space="preserve" stroke="grey"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_28_" d="M244.7,101.5C218.1,66,175.8,42.9,128,42.9S37.9,66,11.3,101.5c-4.9,6.9-8,15.3-8,24.5s3.1,17.6,8,24.3 C37.9,185.9,80.2,209,128,209s90.1-23.1,116.7-58.7c4.9-6.9,8-15.3,8-24.5S249.6,108.5,244.7,101.5z M227.5,138.7 c-23.7,31.3-60.3,49.7-99.5,49.7c-39.4,0-75.8-18.4-99.5-49.7c-2.7-3.7-4.3-8.2-4.3-12.7c0-4.3,1.6-9,4.3-12.7 C52.2,82.1,88.6,63.7,128,63.7c39.2,0,75.8,18.4,99.5,49.7c1.8,2.5,4.3,7.2,4.3,12.7S229.4,136.1,227.5,138.7z M128,79.2 c-25.8,0-46.8,20.8-46.8,46.8s21.1,46.8,46.8,46.8s46.8-21.1,46.8-46.8S153.8,79.2,128,79.2z M144.6,119.9 c-5.7,0-10.4-4.7-10.4-10.4c0-5.7,4.7-10.4,10.4-10.4c5.7,0,10.4,4.7,10.4,10.4C155,115.2,150.3,119.9,144.6,119.9z"></path> </g></svg>
                                    Wards Placed: <strong>${
                                      player.wards_placed || 0
                                    }</strong>
                                </p>
                            </div>
                            <div class="col-md-6">
                                <p class="card-text">
                                    <svg fill="grey" height="20px" width="20px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" xml:space="preserve" stroke="grey"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_28_" d="M244.7,101.5C218.1,66,175.8,42.9,128,42.9S37.9,66,11.3,101.5c-4.9,6.9-8,15.3-8,24.5s3.1,17.6,8,24.3 C37.9,185.9,80.2,209,128,209s90.1-23.1,116.7-58.7c4.9-6.9,8-15.3,8-24.5S249.6,108.5,244.7,101.5z M227.5,138.7 c-23.7,31.3-60.3,49.7-99.5,49.7c-39.4,0-75.8-18.4-99.5-49.7c-2.7-3.7-4.3-8.2-4.3-12.7c0-4.3,1.6-9,4.3-12.7 C52.2,82.1,88.6,63.7,128,63.7c39.2,0,75.8,18.4,99.5,49.7c1.8,2.5,4.3,7.2,4.3,12.7S229.4,136.1,227.5,138.7z M128,79.2 c-25.8,0-46.8,20.8-46.8,46.8s21.1,46.8,46.8,46.8s46.8-21.1,46.8-46.8S153.8,79.2,128,79.2z M144.6,119.9 c-5.7,0-10.4-4.7-10.4-10.4c0-5.7,4.7-10.4,10.4-10.4c5.7,0,10.4,4.7,10.4,10.4C155,115.2,150.3,119.9,144.6,119.9z"></path> </g></svg>
                                    Wards Dewarded: <strong>${
                                      player.wards_destroyed || 0
                                    }</strong>
                                </p>
                            </div>
                        </div> 

                        <div class="row">
                            <div class="col-md-6">
                                <p class="card-text">
                                    <svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="green" stroke="green"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="g" d="M256 21.98c-64 48-128 68-224.03 100.02C31.97 234 112 394 256 490c144-96 224-250 224-362-96-32.02-160-58.02-224-106.02zM229 128h54v101h101v54H283v101h-54V283H128v-54h101V128z"></path></g></svg>
                                    Healing: <strong>${
                                      player.hero_healing || 0
                                    }</strong>
                                </p>
                            </div>
                            <div class="col-md-6">
                                <p class="card-text">
                                    <svg fill="brown" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="brown"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>dragon</title> <path d="M29.618 14.609h0c-2.916-0.277-5.098-1.914-5.821-4.221-0.416-1.324-2.062-2.281-3.957-2.861-2.037-5.066-3.416-7.824-9.806-7.101 2.295 1.796 4.134 4.205 5.075 6.415-1.843-0.529-3.573-0.808-5.182-0.877-3.508-0.769-7.443 0.817-8.6 4.557v20.114h13.274c-8.696-3.148-10.981-19.033-1.86-15.998-0.16 0.474-0.322 0.928-0.477 1.347 2.049 5.319 7.099 10.027 10.576 10.495 0.414 0.015 1.056-0.17 1.8-0.522-0.139-0.044-0.273-0.102-0.401-0.176-0.777-0.448-1.166-1.368-1.14-2.434-0.734 0.386-1.511 0.447-2.129 0.090-0.915-0.528-1.21-1.812-0.823-3.14-0.707 0.173-1.381 0.057-1.821-0.383-0.554-0.553-0.595-1.474-0.193-2.368-0.229-0.038-0.434-0.135-0.594-0.295-0.549-0.549-0.36-1.628 0.423-2.41s1.863-0.971 2.413-0.422c0.241 0.241 0.34 0.584 0.309 0.959 0.698-0.164 1.36-0.046 1.795 0.389 0.384 0.383 0.521 0.944 0.435 1.549 0.534-0.141 1.060-0.101 1.504 0.156 0.583 0.336 0.914 0.979 0.978 1.745 0.949-0.632 2.006-0.794 2.824-0.322 0.965 0.557 1.333 1.842 1.048 3.229 1.497-2.081 2.158-4.725 0.351-7.515z"></path> </g></svg>
                                    Camps Stacked: <strong>${
                                      player.camps_stacked || 0
                                    }</strong>
                                </p>
                            </div>
                        </div> 
                        
                    </div>
                </div>
            </div>
        </div>
    `;
};

async function fetchGameData() {
  try {
    const response = await fetch("/game-data");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched game data:", data); // Debugging line

    // Update scores
    document.getElementById("radiant-score").textContent = `${
      data.radiant.score || 0
    }`;
    document.getElementById("dire-score").textContent = `${
      data.dire.score || 0
    }`;

    // Clear existing player rows and cards
    document.getElementById("radiant-players").innerHTML = "";
    document.getElementById("dire-players").innerHTML = "";
    document.getElementById("radiant-cards").innerHTML = "";
    document.getElementById("dire-cards").innerHTML = "";

    // Populate Radiant player cards
    data.radiant.players.forEach((player) => {
      document.getElementById("radiant-cards").innerHTML +=
        createPlayerCard(player);
    });

    // Populate Dire player cards
    data.dire.players.forEach((player) => {
      document.getElementById("dire-cards").innerHTML +=
        createPlayerCard(player);
    });

    // Populate Radiant players
    data.radiant.players.forEach((player) => {
      document
        .getElementById("radiant-players")
        .appendChild(createPlayerRow(player));
    });

    // Populate Dire players
    data.dire.players.forEach((player) => {
      document
        .getElementById("dire-players")
        .appendChild(createPlayerRow(player));
    });
  } catch (error) {
    console.error("Error fetching game data:", error);
    // Optionally show a message to the user
    document.getElementById("radiant-players").innerHTML =
      '<tr><td colspan="7">Error loading data</td></tr>';
    document.getElementById("dire-players").innerHTML =
      '<tr><td colspan="7">Error loading data</td></tr>';
  }
}

// Set an appropriate interval for fetching data
setInterval(fetchGameData, 5000); // Fetch data every 5 seconds
