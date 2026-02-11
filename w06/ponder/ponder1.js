const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
const grades = ['A','B','C','D','F']

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

students.forEach((person,i) =>{
    person.grade = grades[i];
    // console.log(person)
    console.log(person.first, person.last,":", person.grade);
});

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

const studentList = document.getElementById("studentList")

students.forEach(person =>{
    convert(person.grade)
    console.log(person.first, person.last,":", person.grade);
    console.log(person.first,"got",points,"points")

    const li = document.createElement("li");
    li.textContent = `${person.first} ${person.last}: ${person.grade} (${points} points)`;
    studentList.appendChild(li);
    
})
          
          