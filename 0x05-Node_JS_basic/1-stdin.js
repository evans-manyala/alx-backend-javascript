process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input) {
    const name = input.toString();
    process.stdout.write(`Your name is: ${name}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
