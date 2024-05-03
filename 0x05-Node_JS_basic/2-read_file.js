const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data by lines and remove any empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Count the number of students in each field
    const students = {};
    for (const line of lines) {
      const [firstName, lastName, age, field] = line.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName);
    }

    // Log the number of students in each field
    console.log(`Number of students: ${lines.length}`);
    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    }
  } catch (error) {
    // Throw an error if the database is not available
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
