array = process.argv;
var arrayLength = array.length;
var val = 0;

for (var i = 2; i < arrayLength; i++)
{
    val += Number(array[i]);
}

console.log(val);
