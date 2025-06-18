const user = {
    firstName:'Dorota',
    lastName: 'Frasunkiewicz'
}
const students = [
    {name: 'Dorota', grades: [4,5,3,4]},
    {name: 'Lisa', grades: [5,3,2,4]}
];

function getFullName(person) {
    return person.firstName + " " + person.lastName;
}

function filterUniqueWords(text) {
    const lowerCaseText = text.toLowerCase();
    const words = lowerCaseText.split(" ");
    const uniqueWords = [...new Set(words)];
    const sortedWords = uniqueWords.sort();

    return sortedWords;
}

function getAverageGrade(students) {
    return students.map(student => {
        const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
        const average = sum / student.grades.length;

        return {
            name: student.name,
            average: average
        };
    });
}


console.log(getFullName(user));
console.log(filterUniqueWords('It is a simple test. This test is only a test'));
console.log(getAverageGrade(students));

