import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const students = parseCSV(data);
        resolve(students);
      }
    });
  });
}

function parseCSV(data) {
  // Parse CSV data and return students
}
