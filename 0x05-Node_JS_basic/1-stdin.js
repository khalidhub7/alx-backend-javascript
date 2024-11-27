process.stdout.write(
  'Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', chunk => {
    process.stdout.write(`Your name is: ${chunk}`);
    process.stdin.pause();
    process.exit();
  });
}
if (process.stdin.isTTY === undefined) {
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', chunk => {
    process.stdout.write(`Your name is: ${chunk}`);
  });
  process.stdin.on('end', () => {
    process.stdout.write(
      'This important software is now closing\n');
    process.exit();
  });
}
