// let players: string[];
let players: (string| number | boolean)[];
players=["Messi", "Ronaldo", "2454"];
// players[0]="De Maria"
// players=656;
// players=false
players.push("Neymar");

let players2:[string, string,number, boolean, string];
players2=["messi", "ronaldo", 3344, true, "neymar"]
const newPlayers= players.map((player, index)=> index+1 +". "+player)

console.log(players, newPlayers)