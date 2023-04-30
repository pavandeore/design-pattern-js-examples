/* uses factory methods to create objects 

Manage creation of object in one centralized location

*/

function Developer(name){
    this.name = name;
    this.type  = 'Developer';
}

function Tester(name){
    this.name = name;
    this.type = 'Tester';
}

function EmployeeFactory(){
    this.create = (name,type) =>{
        switch(type){
            case 1: 
            return new Developer(name)
            break;
            case 2: 
            return new Tester(name)
            break;
        }
    }
}

function say(){
    console.log(this.name +" - "+this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []


employees.push(employeeFactory.create("Patric",1))
employees.push(employeeFactory.create("Pawan",1))
employees.push(employeeFactory.create("Akash",3))

employees.forEach(emp => {
    say.call(emp)
})