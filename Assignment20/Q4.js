const students = [
    { id: 1, firstName: "John", grade: "A" },
    { id: 2, firstName: "Jane", grade: "B" },
    { id: 3, firstName: "Bob", grade: "A" }
];
function add(obj) {
    students.push(obj)
    console.log('new student added')
}
add({ id: 4, firstName: "nope", grade: "-A" },
)
function update(targetid,firstName,grade){
    let i = 0
    while (i < students.length){
    
        if (students[i].id == targetid){
            students[i].firstName = firstName
            students[i].grade = grade
        break
        }
    i++
    }
    console.log('object updated')
}
update(2,'coc','f')

function dlt(target){
    let i = 0
    while (i < students.length){
    
        if (students[i].id == target){
           students.splice(i,1)
       
        }
    i++
    }
    console.log('student deleted')
}
dlt(3)
function listAllStudents(students) {
    students.forEach(student => console.log(`ID: ${student.id}, Name: ${student.firstName}, Grade: ${student.grade}`));
}
listAllStudents(students)

function findStudentsByGrade(grade) {
    let studentsWithGrade = students.filter(student => student.grade === grade);
    return studentsWithGrade;
}
console.log(findStudentsByGrade('A'))
function calculateAverageAge(students) {
    let totalAge = students.reduce((sum, student) => sum + student.age, 0);
    
    let averageAge = totalAge / students.length;
    return averageAge;
}
let averageAge = calculateAverageAge(students);
console.log(averageAge);


