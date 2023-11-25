console.log(" aprendi mucho en esta sección")

// In TS there are optional and default / paramaters

//OPTIONAL PARAMETERS num?:string, add(num1:numbar, num2:number=2) this is a way to pass an optional parameters in case you don't pass one

//intarefaces way to specify and object in TypeScript

//objecte function person (person:{name:string, lastName:string})
let p ={
    name:"Juan",
    lastName:"Bosque"
}

// person(p), in order to avoid de practice at line 9, we use interface to define an object properties

// interface Person ={
//     name:string;
//     lastName:string;
// }

// person(p:Person)


//another way for objects it is with class
//with class: class Employee={
    // constructor(name:string)
    //this.name=name;
    // greet()=>console.log(`${this.name}`)
// }

// const employee1 = new Employee("Juan");

// employee1.greet()

// also you can use inheritance(herencia) i.g. class Manager extends Employee{
    // constructor(name:string){
        // super(name)
    // }
    //delegateWork()=>console.log("manager delegateTask")
// }
// let m1= new Manager("Juan")
// m1.delegateWork()
// m1.greet()
// m1.name

//modifiers: public(by default), protected, private ( no puede ser accedido desde afuera)

//private solo puede ser accedido desde adentro de la clase, y protected desde adetro de la clase y sus derivados(instanciaciones)