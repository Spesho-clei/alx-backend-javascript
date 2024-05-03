// full_server/controllers/StudentsController.js

import { readDatabase } from '../utils.js';

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase('./database.csv');
      res.status(200).send(
        `This is the list of our students\n` +
        Object.entries(students)
          .sort((a, b) => a[0].localeCompare(b[0], undefined, { sensitivity: 'base' }))
          .map(([field, names]) => `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`)
          .join('\n')
      );
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase('./database.csv');
      const majorStudents = students[major] || [];
      res.status(200).send(`List: ${majorStudents.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
