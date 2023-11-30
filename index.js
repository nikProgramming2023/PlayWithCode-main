// JS Object
// const pencil = {
// length: "7.5 inches",
// shape: "Hexagonal",
// diameter: "1/4 inch",
// write: function () {
/*do writing*/
// },
// erase: function () {
/*do erasing*/
// },
// sharpen: function () {
/*do sharpening*/
// },
// };
// function Cat(name, type) {
// this.name = name;
// this.type = type;
// }
// const ourCat = {};
// ourCat.name = "Nala";
// ourCat.type = "Domestic Calico";

// Object made with a class
// class Pet {
// constructor(name, type) {
// this.name = name;
// this.type = type;
// }
// }

// const ourDog = new Pet("Luke", "AmStaff");
// const computer = { memory: "16GB", HD: "8TB" };

// const laptop = Object.create(computer);

/* Making a object and then using dot notation */
// const myLocation = {
// city: {
// id: 2643743,
// name: "london",
// coords: {
// lon: -0.1258,
// lat: 51.5085,
// },
// country: "GB",
// population: 9820000,
// timezone: 3600,
// },
/* myLocation.city.country
     myLocation[city][name] */
// };

/* Printing out the properties of an object */
// for (const property in document) {
// console.log(`${property}: ${document[property]}`);
// }
const firstObject = { prop1: "test", prop2: "test2" };
const secondObject = { prop1: "test", prop2: "test2" };
const thrirdObject = secondObject;
const fourthObject = { ...secondObject };
thrirdObject.prop1 = "Orange";
/*
When an object is created from a constructor function, the new object's prototype is the constructor function.
When an object is created from another object, the object it's created from becomes the new object's prototype.
Objects can have their own properties, but they also access the properties of their parents.
If an object has it's own property, it uses the value of that property rather than the parents's property with the same name.
*/
