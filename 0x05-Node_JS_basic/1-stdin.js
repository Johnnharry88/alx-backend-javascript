/*
 * program that writes to stdout and takes
 * i put name
 * @param u_mame: Var to store name
 * Return strings of specific message
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const alx = process.stdin.read();

  if (alx) {
    process.stdout.write(`Your name is: ${alx}`);
  }
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
