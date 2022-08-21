class Person{
    constructor(name, age){
        this.name=name;
        this.age=age
    }

    showDetails(){
        return this.name
    }
}

class PersonChild extends Person{
    constructor(){
        super('Steve')
    }
}

let person1=new Person('Adam',25)
console.log(person1)
console.log(person1.showDetails())

let person2=new PersonChild()
console.log(person2.showDetails())

//By using the above method, we can use Inheritance even in javascript but it is not recommended to use Inheritance in Javascript