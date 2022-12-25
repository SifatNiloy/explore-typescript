"use strict";
var _a;
var player;
player = {
    name: "messi",
    age: 35,
    country: "Argentina",
    married: true,
    clubs: ["Bercelona"],
};
player = {
    name: "neymar",
    //   age: 30,
    country: "Brazil",
    married: true,
    clubs: ["Bercelona"],
};
player.age = player.age + 5;
player.married = false;
player.clubs = (_a = player.clubs) === null || _a === void 0 ? void 0 : _a.map(function (club) { return club.toUpperCase(); });
console.log(player);
var friends;
(function (friends) {
    friends[friends["arif"] = 20] = "arif";
    friends[friends["kalam"] = 21] = "kalam";
    friends[friends["salam"] = 22] = "salam";
    friends[friends["balam"] = 23] = "balam";
})(friends || (friends = {}));
// console.log(friends.kalam, friends[20])
var Configs;
(function (Configs) {
    Configs["API_KEY"] = "api_key";
    Configs["Domain_name"] = "domain_name";
})(Configs || (Configs = {}));
console.log(Configs.API_KEY);
