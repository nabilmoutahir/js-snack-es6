/* 

| Id  | Name                  | Grades |
| --- | --------------------- | ------ |
| 213 | Marco della Rovere    | 78     |
| 110 | Paola Cortellessa     | 96     |
| 250 | Andrea Mantegna       | 48     |
| 145 | Gaia Borromini        | 74     |
| 196 | Luigi Grimaldello     | 68     |
| 102 | Piero della Francesca | 50     |
| 120 | Francesca da Polenta  | 84     |

*/

const students = [
    {
        'id': 213,
        'name': 'Marco della Rovere',
        'grades': 78
    },
    {
        'id': 110,
        'name': 'Paola Cortellessa',
        'grades': 96
    },
    {
        'id': 250,
        'name': 'Andrea Mantegna',
        'grades': 48
    },
    {
        'id': 145,
        'name': 'Gaia Borromini',
        'grades': 74
    },
    {
        'id': 196,
        'name': 'Luigi Grimaldello',
        'grades': 68
    },
    {
        'id': 102,
        'name': 'Piero della Francesca',
        'grades': 50
    },
    {
        'id': 120,
        'name': 'Francesca da Polenta',
        'grades': 84
    }
]

console.log(students)

// array stringhe maiuscole
const studentsUpper = students.map((student) => {
    return student.name.toUpperCase()
})

console.log(studentsUpper)

// array oggetti filtrato con voti > 70
const gradesOver70 = students.filter((student) => {
    return student.grades >= 70;
})

console.log(gradesOver70)

// array oggetti filtrato con voti > 70 e id > 120
const gradesId = students.filter((student) => {
    return student.grades >= 70 && student.id >= 120
})

console.log(gradesId)