process.stdout.write(
  'Welcome to ALX, what is your name?\n',
);

process.stdin
  .on('data', (data) => {
    process.stdout.write(
      `Your name is: ${data.toString().trim()}\n`);
    process.stdin.pause();
  })
  .on('end', () => {
    process.stdout.write(
      'This important software is now closing\n',
    );
  });
