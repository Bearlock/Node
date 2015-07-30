# Node

A Node.js playground

Like it says above, this is a place for me to play around with Node.js.
At the moment its mostly learnyounode tutorials. 

Links to program synopsis:

[Program1.js](#program1)

[program2.js](#program2)

[Program10.js](#program10)

###<a id='program1'></a>
##Program1.js

Program1.js is a program that writes 'Hello World' to stdout.  
I mean what else could it be?

###<a id='program2'></a>
##Program2.js

Program2.js is a program that exposed me to the concepts of arguments in Node.
The way the program works is that it takes any integer values in the arguments array
and adds them all together, returning the value to stdout.

Here is an example of how it would work:

$ node program2.js 1 2 3 4 5

The program would take those 5 arguments and return 15 to stdout.

###<a id='program3'></a>
##Program3.js

Program3.js is a program that takes a full filepath as its argument. With that argument it
finds the file in the filesystem, opens it, and counts the number of newlines contained within.
It then returns this number to stdout. 

It works like so:

$ node program3.js /var/www/myfile.txt

It then reads the file and returns however many newlines it has.

###<a id='program4'></a>
##Program4.js

Program4.js is very similar to Program3.js in the sense that it does the same exact thing. It 
takes a full filepath as its only argument, opens the file, reads the contents, and returns the
number of newlines. Program4.js is different in that it does all of this asynchronously. 

Call it like this:

$ node program4.js /var/www/myfile.txt

It will then return the number of lines to stdout.

###<a id='program5'></a>
##Program5.js


###<a id='program6'></a>
##Program6.js


###<a id='program7'></a>
##Program7.js


###<a id='program8'></a>
##Program8.js


###<a id='program9'></a>
##Program9.js


###<a id='program10'></a>
##Program10.js

Program10.js is a learnyounode exercise that I thought was pretty nifty.
Its a raw TCP server that takes an arbitrary port as its first argument.
it can be called like so:

$ node program10.js \<port\>

Afterwards, if one were to telnet to that specified port, it would return
the current date-time in a nice, easy to read format. The server stays
open and listens for as long as program10.js goes uninterrupted.
