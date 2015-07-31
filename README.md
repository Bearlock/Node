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

Output:

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

The program would take those 5 and add 'em up.

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

In my case file.txt looks like this:

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

It will then return the number of lines to stdout. In my case file.txt looks like this:

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
exact same thing. Except this time its asynchronous. This takes a directory and a file extension as arguments

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
$ node program6.js /var/www/node_projects/ js
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

Program9.js is a program that is similar in nature to the last two. However, this time it can take
multiple URLs as its arguments. It executes HTTP GET requests on those URLs, concatenates the received
data to a string, stores that string in an array, and finally prints those strings out to stdout only
after each data stream has finished up. As a nice touch, it also returns the strings of data in the order
that the arguments were called. 

Call it as follows:

```
$ node program9.js http://yahoo.com http://google.com http://threevirtues.com
```

Output:

```html
<HTML>
<HEAD>
<TITLE>Error</TITLE>
</HEAD>

<BODY BGCOLOR="white" FGCOLOR="black">
<!-- status code : 301 -->
<!-- Error: GET -->
<!-- host machine: ir19.fp.gq1.yahoo.com -->
<!-- timestamp: 1438355878.000 -->
<!-- url: http://yahoo.com/-->
<H1>Error</H1>
<HR>

<FONT FACE="Helvetica,Arial"><B>
Description: Could not process this "GET" request.
</B></FONT>
<HR>
</BODY>

<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="http://www.google.com/">here</A>.
</BODY></HTML>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.0//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic10.dtd">
<HTML>
<HEAD >
	<META HTTP-EQUIV="CONTENT-TYPE" CONTENT="text/html; charset=utf-8">
	<TITLE>The Three Virtues of a GREAT Programmer</TITLE>
 <style>

BODY {
    background-image: url('images/ppbk011.jpg');
  }


p {
    font-family : Arial, 'sans-serif';
    font-size : 11pt;
  }

DIV.footer
{
    PADDING-RIGHT   : 2px;
    PADDING-LEFT    : 2px;
    PADDING-TOP     : 0px;
    PADDING-BOTTOM  : 2px;
    FONT-FAMILY     : Verdana, Arial;
    TEXT-ALIGN      : left;
    POSITION        : absolute;
    VERTICAL-ALIGN  : top;
    VISIBILITY      : hidden;
    FONT-SIZE       : 8pt;
    WIDTH           : 80%;
}

h1.a {
	text-decoration: underline;
}
</style>

<script language="JavaScript">
function setfooter() {
	var fno     = document.getElementById("footnotes");
	var divht   = fno.offsetHeight;
	var divwt   = fno.offsetWidth;
  	var myWidth = 0, myHeight = 0;


	if( typeof( window.innerWidth ) == 'number' ) {		 //Non-IE
    		myWidth  = window.innerWidth;
    		myHeight = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		//IE 6+ in 'standards compliant mode'
		myWidth  = document.documentElement.clientWidth;
		myHeight = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		//IE 4 compatible
		myWidth  = document.body.clientWidth;
		myHeight = document.body.clientHeight;
	}

	toppos  = myHeight - divht;
	leftpos = parseInt((myWidth - divwt) / 2);

	fno.style.top    = toppos  + "px";
	fno.style.left   = leftpos + "px";
	fno.style.visibility = "visible";
}
</script>

</HEAD>
<BODY LANG="en-US" DIR="LTR" onLoad="setfooter();" onResize="setfooter();" >

<table border="0" width="85%" align="center">
 <tr>
  <td>
	<H1 ALIGN=CENTER>Three Virtues</H1><br><hr>
	<P>According to Larry Wall<SUP>(1)</SUP>, the original author of the Perl
	programming language, there are <B>three great virtues of a programmer</B>; Laziness, Impatience and Hubris</P>

	<OL>
		<LI> <b>Laziness</b>: The quality that makes you go to great effort to
		reduce overall energy expenditure.  It makes you write labor-saving
		programs that other people will find useful and document what you
		wrote so you don't have to answer so many questions about it.</LI>

		<LI> <b>Impatience</b>: The anger you feel when the computer is being
		lazy.  This makes you write programs that don't just react to your
		needs, but actually anticipate them.  Or at least pretend to.</LI>

		<LI> <b>Hubris</b>: The quality that makes you write (and maintain)
		programs that other people won't want to say bad things about.</LI>
	</OL>
	<hr>
  </td>
 </tr>
</table>

<div id="footnotes" class="footer" >
(1) Quoted from "Programming Perl", 2<SUP>nd</SUP> Edition, O'Reilly &amp; Associates, 1996
</div>

</BODY>
</HTML>
```

###<a id='program10'></a>
##Program10.js

Program10.js is a program that I thought was pretty nifty.
Its a raw TCP server(my first one!) that takes an arbitrary 
port as its first argument.

It can be called like so:

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