let player: {
  name: string;
  age?: number;
  country: string;
  married: boolean;
  clubs: string[];
} 
player= {
  name: "messi",
  age: 35,
  country: "Argentina",
  married: true,
  clubs: ["Bercelona"],
};
player= {
  name: "neymar",
//   age: 30,
  country: "Brazil",
  married: true,
  clubs: ["Bercelona"],
};
player.age= player.age! +5
player.married= false
player.clubs=  player.clubs?.map((club)=>club.toUpperCase())
console.log(player)

enum friends{
    arif=20,
    kalam,
    salam, 
    balam
}

// console.log(friends.kalam, friends[20])

enum Configs{
    API_KEY ="api_key",
    Domain_name= "domain_name"
}


console.log(Configs.API_KEY)