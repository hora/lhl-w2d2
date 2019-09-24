// stdin set-up
const stdin = process.stdin;
const stdout = process.stdout;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

// syntax: stdin.on(event, callback)

stdin.on('data', function(key) {
    if (key === '\u0003') {
        process.exit();
    }

    stdout.write(`${key}\n`);
});

