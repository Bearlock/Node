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
and adds them all together and returns the value to stdout.

Here is an example of how it would work:

$ node program2.js 1 2 3 4 5

The program would take those 5 arguments and return 15 to stdout.

###<a id='program3'></a>
##Program3.js


###<a id='program4'></a>
##Program4.js


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
