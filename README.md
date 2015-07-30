# Node

A Node.js playground

Like it says above, this is a place for me to play around with Node.js.

Links to program synopses:

[program1.js](#program1)

[program2.js](#program2)

[program3.js](#program3)

[program4.js](#program4)

[program5.js](#program5)

[program10.js](#program10)

###<a id='program1'></a>
##Program1.js

Program1.js is a program that writes 'Hello World' to stdout.  
I mean what else could it be?

Get your hello world on:

```
$ node program1.js
```

###<a id='program2'></a>
##Program2.js

Program2.js is a program that exposed me to the concepts of arguments in Node.
The way the program works is that it takes any integer values in the arguments array
and adds them all together, returning the value to stdout.

Here is an example of how it would work:

```
$ node program2.js 1 2 3 4 5
```

The program would take those 5 arguments and return 15 to stdout.

###<a id='program3'></a>
##Program3.js

Program3.js is a program that takes a full filepath as its argument. With that argument it
finds the file in the filesystem, opens it, and counts the number of newlines contained within.
It then returns this number to stdout. 

It works like so:

```
$ node program3.js /var/www/myfile.txt
```

It then reads the file and returns however many newlines it has.

###<a id='program4'></a>
##Program4.js

Program4.js is very similar to Program3.js in the sense that it does the same exact thing. It 
takes a full filepath as its only argument, opens the file, reads the contents, and returns the
number of newlines. Program4.js is different in that it does all of this asynchronously. 

Call it like this:

```
$ node program4.js /var/www/myfile.txt
```

It will then return the number of lines to stdout.

###<a id='program5'></a>
##Program5.js

Program5.js is a program that finds files in a given directory by file extension. It takes a directory
and a file extension as its arguments. The program will open the specified directory, gather up the 
file names with the specified file extension, and then return a list of those file names to stdout.

It works thusly:

```
$ node program5.js /var/www/JavaScript/ js
```

The program will then return all files that have a '.js' file extension to stdout. 

###<a id='program6'></a>
##Program6.js

Program6.js is a program that is very similar to Program5.js. Again, this is in the sense that it does the
exact same thing. Except this time, its Asynchronous. This takes a directory and a file extension as arguments

It works like this:

```
$ node program6.js /var/www/JavaScript/ js
```

It will then return a list of all files ending with a '.js' file extension and print it to stdout.

###<a id='program7'></a>
##Program7.js

Program7.js is an interesting program. Maybe it could be considered a **very** low-powered curl (emphasis on very).
The program works by taking a URL as its argument. It executes an HTTP GET on the URL and reads the data, line by line
and prints it to stdout as it gets it.

Call it like so:

```
$ node program7.js http://google.com
```

This case in particular returns the following to stdout:

```html
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="http://www.google.com/">here</A>.
</BODY></HTML>
```

###<a id='program8'></a>
##Program8.js


###<a id='program9'></a>
##Program9.js


###<a id='program10'></a>
##Program10.js

Program10.js is a program that I thought was pretty nifty.
Its a raw TCP server(my first one!) that takes an arbitrary 
port as its first argument.

it can be called like so:

```
$ node program10.js \<port\>
```

Afterwards, if one were to telnet to that specified port, it would return
the current date-time in a nice, easy to read format. The server stays
open and listens for as long as program10.js goes uninterrupted.
