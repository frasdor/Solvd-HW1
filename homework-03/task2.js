class Person {
    constructor(firstName,lastName) {
          if (typeof firstName !== 'string' || typeof lastName !== 'string') {
            throw new Error('First name and last name must be strings');
            }
            this.firstName = firstName;
            this.lastName = lastName;
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class TextAnalyzer {
    constructor(text) {
        if (typeof text !== 'string') {
        throw new Error('Text must be a string');
        }
        this.text = text;
    }

    filterUniqueWords() {
        const lowerCaseText = this.text.toLowerCase();
        const words = lowerCaseText.split(" ");
        const uniqueWords = [...new Set(words)];
        const sortedWords = uniqueWords.sort();
        return sortedWords;
    }
}

class StudentStats {
    constructor(students) {
        if (!Array.isArray(students)) {
            throw new Error('Students must be an array');
        }
        this.students = students;
    }
    getAverageGrade() {
        return this.students.map(student => {
            const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
            const average = sum / student.grades.length;

            return {
                name: student.name,
                average: average
            };
        });
    }
}

const user = new Person ('Dorota', 'Frasunkiewicz');
   console.log(user.getFullName());

const analyzer = new TextAnalyzer('It is a simple test. This test is only a test');
    console.log(analyzer.filterUniqueWords());

const students = [
    {name: 'Dorota', grades: [4,5,3,4]},
    {name: 'Lisa', grades: [5,3,2,4]}
];

const stats = new StudentStats(students);
    console.log(stats.getAverageGrade());

