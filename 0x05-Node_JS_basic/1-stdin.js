process.stdout.write(
  'Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => {
  process.stdout.write(
    `Your name is: ${chunk}`);
  process.stdin.pause();
});

process.stdin.on('end', () => {
  if (!process.stdin.isTTY) {
    process.stdout.write(
      'This important software is now closing\n');
    process.exit();
  } else {
    process.exit();
  }
});