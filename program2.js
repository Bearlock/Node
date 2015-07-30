var args = process.argv.slice(2);
var val  = 0;

// Takes command-line arguments and casts them to ints.
// Sums up each argument and prints result to stdout.
for (var i = 0; i < args.length; i++)
{
    val += Number(args[i]);
}

console.log(val);
