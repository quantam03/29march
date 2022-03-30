const person ={
    name:"Vaibhav",
    age:23,
    bloodgroup:"o+"
}
console.log(person);
console.log(person.bloodgroup);//acess particular dot notation
console.log(person["name"]);//by square brackets

/* 8888888888888888888888888888888888888888888888888888888888888 */


const person2 ={
    name:"Vaibhav",
    age:23,
    bloodgroup:"o+",

    displayInfo: function(){ //method

        console.log(`my name is ${this.name} my age is ${this.age}`)

    }
}
person2.displayInfo()

const myObjkeys= Object.keys(person2)
console.log(myObjkeys)


const myObjvalue= Object.values(person2)
console.log(myObjvalue)

/* 8888888888888888888888888888888888888888888888888888888888888 */

// this keyword refers to the global object.
//function inside object is called method.

const myObj = new Object() //new is to make constructor

myObj.name="Vaibhav"// dot notation
myObj["name"]="Vaibhav Kudalkar"

console.log(myObj)

/* 8888888888888888888888888888888888888888888888888888888888888 */

//Spread Operator:used to shallow copy objects

const body={
    height: 6,
    weight:75
}
const brain={
    iq:1
}

const person3={
    ...body,
    ...brain
}
console.log(person3)

/* 8888888888888888888888888888888888888888888888888888888888888 */


//object.create: allows us to create an object by taking the reference of an existing object.
let person4={
    name:"raj",
    sex:"male",
    rollno:12
}
const flags = Object.create(person4)
console.log(flags)

//function constructor:
function Employee(name,age){
    this.name=name;
}

const Employee1 = new Employee("Raju",34);
const Employee2 = new Employee("sham");

Employee1.age= 23;



console.log(Employee1)