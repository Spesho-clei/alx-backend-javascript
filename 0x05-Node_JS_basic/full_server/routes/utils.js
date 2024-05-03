// full_server/utils.js

import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = {};
        const lines = data.split('\n').filter(line => line.trim() !== '');
        lines.forEach(line => {
          const [firstName, lastName, age, field] = line.split(',');
          if (!students[field]) students[field] = [];
          students[field].push(firstName);
        });
        resolve(students);
      }
    });
  });
}
