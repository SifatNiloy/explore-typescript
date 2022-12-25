import { type } from "os";

type MyName= "sojib"| "saiful" ;
let Name: MyName = "saiful"

type arr= MyName[];
const arr:arr =["sojib"]

type Players= [string, string, number, boolean, string];
let players : Players= ["messi", "ronaldo", 3344, true, "neymar"];

// let add : (num1: number, num2: number, num3?:number)=> number =>{
//   add=(num1,num2,num3=0)=>{
//     return num1+num2+num3;
//   }
// };
// const result = add(10, 30);

// type Address={
//         presentAddress:string;
//         permanentAddress:string;
//     }

// type Favourite= {
//         type: "food" |"player" | "singer" |'actor' ;
//         value: string;
//     }
// type Person ={
//     name: string;
//     email:string;
//     age: number ;
//     phone: string | string[] ;
//     address :Address;
//     favorites : Favourite[];
// };


// const person: Person={
//     name: "sifat",
//     email: "sifat@gmail.com",
//     age:33,
//     phone: ["123"],
//     address: {
//         presentAddress:"dhaka",
//         permanentAddress:"barishal"
//     },
//     favorites:[
//         {
//         type: "food",
//         value: "biriani",
//         },
//         {
//         type: "player",
//         value: "sakib",
//         },
// ]
// }