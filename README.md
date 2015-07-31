# Node

A Node.js playground

Like it says above, this is a place for me to play around with Node.js.

Links to program synopses:

[program1.js](#program1)

[program2.js](#program2)

[program3.js](#program3)

[program4.js](#program4)

[program5.js](#program5)

[program6.js](#program6)

[program7.js](#program7)

[program8.js](#program8)

[program9.js](#program9)

[program10.js](#program10)

###<a id='program1'></a>
##Program1.js

Program1.js is a program that writes 'Hello World' to stdout.  
I mean what else could it be?

Get your hello world on:

```
$ node program1.js
```

Ouput:

```
HELLO WORLD
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

The program would take those 5 add 'em up.

Output:

```
15
```

###<a id='program3'></a>
##Program3.js

Program3.js is a program that takes a full filepath as its argument. With that argument it
finds the file in the filesystem, opens it, and counts the number of newlines contained within.
It then returns this number to stdout. 

It works like so:

```
$ node program3.js /var/www/file.txt
```

It then reads the file and returns however many newlines it has. In my case file.txt looks like this

```
$ cat file.txt
Hey
This
Is
A file
```

Output:

```
$ node program3.js /var/www/file.txt
4
```

###<a id='program4'></a>
##Program4.js

Program4.js is very similar to Program3.js in the sense that it does the same exact thing. It 
takes a full filepath as its only argument, opens the file, reads the contents, and returns the
number of newlines. Program4.js is different in that it does all of this asynchronously. 

Call it like this:

```
$ node program4.js /var/www/myfile.txt
```

It will then return the number of lines to stdout. In my case file.txt looks like this

```
$ cat file.txt
Hey
This
Is
A file
```

Output:

```
$ node program4.js /var/www/myfile.txt
4
```

###<a id='program5'></a>
##Program5.js

Program5.js is a program that finds files in a given directory by file extension. It takes a directory
and a file extension as its arguments. The program will open the specified directory, gather up the 
file names with the specified file extension, and then return a list of those file names to stdout.

It works thusly:

```
$ node program5.js /var/www/JavaScript/ js
```

The program will then return all files that have a '.js' file extension to stdout. My node_projects directory
has a few files in it. Looks like this:

```
$ls -la
total 64
drwxrwxr-x. 3 erick erick 4096 Jul 30 14:34 .
drwxr-xr-x. 9 erick erick 4096 Jul 17 09:37 ..
-rw-rw-r--. 1 erick erick   21 Jul  2 10:09 file.txt
drwxrwxr-x. 8 erick erick 4096 Jul 30 16:54 .git
-rw-r--r--  1 erick erick  893 Jul 30 15:26 program10.js
-rw-rw-r--. 1 erick erick  111 Jul  2 14:22 program1.js
-rw-rw-r--. 1 erick erick  248 Jul 30 12:02 program2.js
-rw-r--r--. 1 erick erick  569 Jul 30 12:07 program3.js
-rw-rw-r--. 1 erick erick  509 Jul 30 12:09 program4.js
-rw-r--r--. 1 erick erick  701 Jul 30 12:13 program5.js
-rw-r--r--. 1 erick erick  410 Jul  8 11:31 program6.js
-rw-r--r--. 1 erick erick  375 Jul 30 12:05 program7.js
-rw-r--r--  1 erick erick  568 Jul 30 12:12 program8.js
-rw-r--r--  1 erick erick 1139 Jul 30 14:32 program9.js
-rw-rw-r--. 1 erick erick 4120 Jul 31 08:26 README.md
```

Program5.js grabs just the '.js files.

Output:

```
$ node program5.js /var/www/node_projects/ js
program1.js
program10.js
program2.js
program3.js
program4.js
program5.js
program6.js
program7.js
program8.js
program9.js
```

###<a id='program6'></a>
##Program6.js

Program6.js is a program that is very similar to Program5.js. Again, this is in the sense that it does the
exact same thing. Except this time, its Asynchronous. This takes a directory and a file extension as arguments

It works like this:

```
$ node program6.js /var/www/JavaScript/ js
```

It will then return a list of all files ending with a '.js' file extension and print it to stdout. My node_projects 
directory has a few files in it. Looks like this:

```
$ls -la
total 64
drwxrwxr-x. 3 erick erick 4096 Jul 30 14:34 .
drwxr-xr-x. 9 erick erick 4096 Jul 17 09:37 ..
-rw-rw-r--. 1 erick erick   21 Jul  2 10:09 file.txt
drwxrwxr-x. 8 erick erick 4096 Jul 30 16:54 .git
-rw-r--r--  1 erick erick  893 Jul 30 15:26 program10.js
-rw-rw-r--. 1 erick erick  111 Jul  2 14:22 program1.js
-rw-rw-r--. 1 erick erick  248 Jul 30 12:02 program2.js
-rw-r--r--. 1 erick erick  569 Jul 30 12:07 program3.js
-rw-rw-r--. 1 erick erick  509 Jul 30 12:09 program4.js
-rw-r--r--. 1 erick erick  701 Jul 30 12:13 program5.js
-rw-r--r--. 1 erick erick  410 Jul  8 11:31 program6.js
-rw-r--r--. 1 erick erick  375 Jul 30 12:05 program7.js
-rw-r--r--  1 erick erick  568 Jul 30 12:12 program8.js
-rw-r--r--  1 erick erick 1139 Jul 30 14:32 program9.js
-rw-rw-r--. 1 erick erick 4120 Jul 31 08:26 README.md
```

Program6.js grabs just the '.js files.

Output:

```
$ node program5.js /var/www/node_projects/ js
program1.js
program10.js
program2.js
program3.js
program4.js
program5.js
program6.js
program7.js
program8.js
program9.js
```


###<a id='program7'></a>
##Program7.js

Program7.js is an interesting program. Maybe it could be considered a **very** low-powered curl (emphasis on very).
The program works by taking a URL as its argument. It executes an HTTP GET on the URL and reads the data line by line
and prints it to stdout as it gets it.

Call it like so:

```
$ node program7.js http://google.com
```

Output:

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

Program8.js is similar to program7.js. It executes the same HTTP GET comman on a URL and read the data line by line.
This time however, the program concatenates all the data into a single string and outputs the data contents after 
it reaches the end of the file. It also counts the number of characters in the string. 

Run it like so:

```
$ node program8.js http://google.com
```

Output:

```html
219
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="http://www.google.com/">here</A>.
</BODY></HTML>
```

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
open and listens for as long as program10.js goes uninterrupted. It closes
the the connection after returning the date-time.

Output:

```
$ telnet 127.0.0.1 58017
Trying 127.0.0.1...
Connected to 127.0.0.1.
Escape character is '^]'.

The current time is: 2015-07-31 08:37

Connection closed by foreign host.
```