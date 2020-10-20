const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4));

const person ={
    name:'Max',
    age:29,
    greet(){
        console.log('Hi, I am'+this.name);
    }

};

const printName = ({name,age})=>{
    console.log(name,age);

}
printName(person);
