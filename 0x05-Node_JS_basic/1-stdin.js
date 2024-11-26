// retrieve name, then exit the program

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', chunk => {
  process.stdout.write(
    `Your name is: ${chunk}`);

  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }

  process.exit();
});
