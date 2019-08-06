const cohorts = require('./cohorts');

const names = ['Luke', 'James', 'Ellen', 'Macy', 'Shanice'];

const students = [];
// Loop through each student
// Build out a new object
// Use their and a cohort to build that object
// We will put that object in the students array
// Export students

for (let name of names) {
    const newStudent = {
        name: name, // left hand creates key, right hand finds value
        cohort: cohorts[1],
    };
    students.push(newStudent);
}

module.exports = students;