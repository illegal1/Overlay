document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("playerCard");
  const playerName = document.getElementById("playerName");
  const kda = document.getElementById("kda");
  const netWorth = document.getElementById("netWorth");
  const killStreak = document.getElementById("killStreak");
  const towerDamage = document.getElementById("towerDamage");
  const heroDamage = document.getElementById("heroDamage");
  const healing = document.getElementById("healing");
  const xpBox = document.getElementById("xpDifference");
  const playerImage = document.getElementById("playerImage");

  function updateCard(data) {
    // Find the selected player
    const player = data.radiant.players
      .concat(data.dire.players)
      .find((player) => player.selected_unit);

    if (player) {
      playerName.textContent = player.name;
      kda.textContent = `K/D/A: ${player.kills}/${player.deaths}/${player.assists}`;
      netWorth.textContent = `Net Worth: ${player.net_worth}`;
      killStreak.textContent = `Kill Streak: ${player.killstreak}`;
      towerDamage.textContent = `Tower Damage: ${player.tower_damage}`;
      heroDamage.textContent = `Hero Damage: ${player.hero_damage}`;
      healing.textContent = `Healing: ${player.hero_healing}`;
      playerImage.src = `players/${player.name}.png`;
    } else {
      // Handle case when no player is selected
      playerName.textContent = "No player selected";
      kda.textContent = "K/D/A: --/--/--";
      netWorth.textContent = "Net Worth: --";
      killStreak.textContent = "Kill Streak: --";
      towerDamage.textContent = "Tower Damage: --";
      heroDamage.textContent = "Hero Damage: --";
      healing.textContent = "Healing: --";
      playerImage.src = `players/placeholder.png`;
    }
  }

  function updateXPBox(data) {
    const radiantXP = data.radiant.players.reduce(
      (total, player) => total + player.experience,
      0
    );
    const direXP = data.dire.players.reduce(
      (total, player) => total + player.experience,
      0
    );
    const xpDifference = radiantXP - direXP;
    const leadingTeam = xpDifference > 0 ? "radiant" : "dire";

    // Format the XP difference
    let formattedXP;
    if (Math.abs(xpDifference) >= 1000) {
      formattedXP = `${(Math.abs(xpDifference) / 1000).toFixed(1)}k`; // Display as "2k", "3.5k", etc.
    } else {
      formattedXP = `<1k`; // Display as "<1k" for values less than 1000
    }

    // Create the SVG arrowhead as a string
    const svgArrowHead = `
            <svg class="xp-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="lightgreen">
                <path d="M12 2l-7 7h14z"/>
            </svg>
        `;

    // Set the XP difference value with the SVG arrowhead
    xpBox.innerHTML = `${svgArrowHead} ${formattedXP} XP`;

    // Set position and styles based on which team is leading
    if (leadingTeam === "radiant") {
      xpBox.style.top = "60px"; // Top-left for Radiant
      xpBox.style.left = "859px";
      xpBox.style.right = ""; // Clear any previous right positioning
    } else {
      xpBox.style.top = "60px"; // Top-right for Dire
      xpBox.style.right = "859px";
      xpBox.style.left = ""; // Clear any previous left positioning
    }

    // Show the XP box
    xpBox.style.display = "block";
  }

  function fetchData() {
    fetch("/game-data")
      .then((response) => response.json())
      .then((data) => {
        updateCard(data);
        updateXPBox(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  // Fetch data every 500 milliseconds
  setInterval(fetchData, 300);

  // Initial fetch to populate the card and XP box on load
  fetchData();
});
