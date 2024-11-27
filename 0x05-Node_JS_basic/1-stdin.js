process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');

if (process.stdin.isTTY) {
  process.stdin.on('data', chunk => {
    process.stdout.write(`Your name is: ${chunk}`);
    process.stdin.pause();
    process.exit();
  });
} else {
  process.stdin.on('data', chunk => {
    process.stdout.write(`Your name is: ${chunk}`);
  });
  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  });
}
