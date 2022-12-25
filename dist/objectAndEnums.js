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
