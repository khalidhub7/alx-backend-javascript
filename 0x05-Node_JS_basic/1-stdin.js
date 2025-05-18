process.stdout.write(
  'Welcome to ALX, what is your name?\n',
);

const istty = process.stdin.isTTY;

process.stdin.on('data', (data) => {
  process.stdout.write(
    `Your name is: ${data}`,
  );
  if (istty) {
    process.exit(0);
  } else {
    process.stdout.write(
      'This important software is now closing\n',
    );
    process.exit(0);
  }
});
