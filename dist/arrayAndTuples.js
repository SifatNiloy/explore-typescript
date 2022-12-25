"use strict";
// let players: string[];
// let players: (string| number | boolean)[];
// players=["Messi", "Ronaldo", "2454"];
// players[0]="De Maria"
// players=656;
// players=false
players.push("Neymar");
var players2;
players2 = ["messi", "ronaldo", 3344, true, "neymar"];
var newPlayers = players.map(function (player, index) { return index + 1 + ". " + player; });
console.log(players, newPlayers);
