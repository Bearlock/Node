array = process.argv;
var arrayLength = array.length;
var val = 0;

// Takes command-line arguments as an array,
// tries to cast them to ints and finally
// returns the total value of the array
for (var i = 2; i < arrayLength; i++)
{
    val += Number(array[i]);
}

console.log(val);
