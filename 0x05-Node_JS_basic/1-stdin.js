process.stdout.write('Welcome to Holberton School, what is your name?');
process.stdout.write('\n');

process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => {
  process.stdout.write(
    `Your name is: ${chunk}`);

  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing');
    process.stdout.write('\n');
  }

  process.exit();
});
