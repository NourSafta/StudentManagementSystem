var numberOfStudents = 0;
const students = [];

function addStudent(name)
{   
    numberOfStudents += 1;
    students.push=name;
    numberOfStudents=students.length ;   
}

 function getNumberOfStudents ()
{
    console.log(numberOfStudents)
}
function clearStudents(name)
{
    for (let i=0;i< numberOfStudents;i++)
    {
        students.pop();
    }
}
function createFullName(firstName,lastName)
{
    let studentName= firstName +" "+ lastName;
    console.log(studentName);
}
//return '${firstName} ${lastName}';
function getStudentByInitials(name,initial)
{
    if(studentName)
    {

    } else {

    }
}

/*addStudent()
console.log(numberOfStudents)
addStudent()
console.log(numberOfStudents)


getNumberOfStudents();
addStudent();
getNumberOfStudents();

*/
