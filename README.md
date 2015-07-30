# Node

A Node.js playground

Like it says above, this is a place for me to play around with Node.js. 
At the moment its mostly learnyounode tutorials. 

Links to program synopsis:
*[Program10.js](#program10)

###<a id='program10'></a>
##Program10.js

Program10.js is a learnyounode exercise that I thought was pretty nifty.
Its a raw TCP server that takes an arbitrary port as its first argument.
it can be called like so:

$ node program10.js \<port\>

Afterwards, if one were to telnet to that specified port, it would return
the current date-time in a nice, easy to read format. The server stays 
open and listens for as long as program10.js goes uninterrupted.
