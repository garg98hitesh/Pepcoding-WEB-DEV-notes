let arr=[1,2,3,4]

let person1 ={

    name :'Adam',
    age:25 ,

    showDetails:function(){
        console.log(this.name+''+this.age)
    }
}

let person2={
    name:'Steve'
}

person2.__proto__ = person1

console.log(person2.name + '' + person2.age)  // Steve25

person2.showDetails() //Steve25


