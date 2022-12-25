// interface Person{
//     name: string
//     email: string
// }
// let person: Person= {
//     name: "niloy",
//     email: "niloy@gmail.com"
// }
interface Add{
     (num1: number, num2: number, num3?:number): number;
}
const add: Add =(num1,num2,num3=0)=>{
    return num1+num2+num3;
};
interface Address  {
  presentAddress: string;
  permanentAddress: string;
};

interface Favourite  {
  type: "food" | "player" | "singer" | "actor";
  value: string;
};
interface Auth{
    isLoggedIn: boolean;
}

interface Person extends Auth {
  name: string;
  email: string;
  age?: number;
  phone: string | string[];
  address: Address;
  favorites?: Favourite[];
};

const person: Person = {
  name: "sifat",
  email: "sifat@gmail.com",
  age: 33,
  phone: ["123"],
  address: {
    presentAddress: "dhaka",
    permanentAddress: "barishal",
  },
  favorites: [
    {
      type: "food",
      value: "biriani",
    },
    {
      type: "player",
      value: "sakib",
    },
  ],
  isLoggedIn: true
};