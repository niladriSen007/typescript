let myName: string = "Niladri";
let myAge: number = 25;

let myHeight: string | number = "12.8inch";
console.log(myHeight);

let nameArr: string[] = ["Nil", "Ram"];

let nameArrStringOrNumber: (string | number)[] = ["Nil", "Ram", 1, 2, 3];

let nameArrStringOrNumberOrBoolean: (string | number | boolean)[] = [
  "Nil",
  "Ram",
  1,
  2,
  3,
  true,
  false,
];

let personObj: { name: string; age: number } = {
  name: "Niladri",
  age: 12,
};

//isMarried is optional
let personObj2: { name: string; age: number; isMarried?: boolean } = {
  name: "Rahul",
  age: 23,
};

const returnName = (): string => {
  return "Niladri";
};

const takeArgs = (myAge: number) => {
  console.log(myAge);
};

const takeArgsreturnArgs = (myAge: number): number => {
  return myAge;
};

const takeArgsreturnArgsVoid = (myAge: number): void => {};

const objFunc = (user: { name: string; age: number }): string => {
  return user.name;
};
//or
type userType = {
  name: string;
  age: number;
  phone?: string;
};

const userObjFunc = (user:userType) =>{
    return user.name;
}
