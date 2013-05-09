----------
BACKGROUND
----------

I found it beneficial to create a function that generates random strings of varying length
while I was carrying out several unit tests.


-----
USAGE
-----

string generateRandomString([string type[, int maxlength[, boolean isfixed]]]);

basic usage:
document.body.innerHTML = generateRandomString();

create an alpha numeric string that can be a maximum of 30 characters long:
generateRandomString('alphanum', 30);

generate a number string with a fixed character length of 10:
generateRandomString('num', 10, true);


-------
OPTIONS
-------

First argument allows you to specify the characters used to generate the string:
- num: numbers only (0 - 9)
- alphalc: alphabetic lowercase characters (a - z)
- alphauc: alphabetic uppercase characters (A - Z)
- alpha: alphabetic characters in both lower and upper case (a - z, A - Z)
- alphanum: alphanumeric characters (a - z, A - Z, 0 - 9)
- special: special characters such as !, @, #, etc.
- all: default setting, outputs all alphanumeric and special characters

Second argument allows you to specify the generated maximum string length. Default value is 10.

Specify whether the generated string is always a fixed length through the third argument:
- true: the generated string is always the specified character length
- false: default setting, the string length is randomized, can vary from 1 character to the number specified in the second argument

