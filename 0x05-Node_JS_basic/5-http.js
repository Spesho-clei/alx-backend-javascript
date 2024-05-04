const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const { url } = req;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    const databaseFile = process.argv[2];
    if (!databaseFile) {
      res.statusCode = 500;
      res.end('Error: No database file provided');
      return;
    }

    fs.readFile(databaseFile, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading database file');
        return;
      }

      const students = parseCSV(data);
      res.end(`This is the list of our students\n${students}`);
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

function parseCSV(data) {
  const lines = data.trim().split('\n');
  const students = lines
    .map(line => line.split(','))
    .filter(student => student.length === 3 && student[0] !== 'firstname')
    .map(student => student[0])
    .join(', ');

  return students;
}

module.exports = app;
