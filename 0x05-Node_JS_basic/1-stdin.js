process.stdout.write("Welcome to Holberton School, what is your name?");

process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Trim whitespace and convert to string
  console.log(`Your name is: ${name}`);
  console.log("This important software is now closing");
  process.exit();
});
