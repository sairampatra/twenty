let student = { name: 'John', age: 16, adderss: 'krpt', obj: "yes" };
Object.preventExtensions(student);
let extensibleStatus = Object.isExtensible(student)
let teacher = {
    name: 'John ',
    lastname: 'desai',
    yearsOfExperience: 10
}
teacher.subject = 'Math'
Object.seal(teacher)
let sealedstatus = Object.isSealed(teacher)
console.log(`is extensible: ${extensibleStatus} , is sealed: ${sealedstatus}`); // Outputs: undefined