An exercise in creating a random string generator helper function, which also provides some general all around usefulness.

#Usage
    /* 
     * random alphanumeric string (including special characters) of random length 
     * default max length of 10 chars
     */
    var random = generateRandomString();

    /*
     * random alphanumeric string of random length 
     * possible max length of 30 chars
     */
    var random = generateRandomString('alphanum', 30);

    /*
     * random numeric string with a fixed character length of 10 chars
     */
    var random = generateRandomString('num', 10, true);


#Arguments
* **type** *String* - Character type
  - **num** - numeric (0 - 9)
  - **alphalc** - alphabetic lowercase (a - z)
  - **alphauc** - alphabetic uppercase (A - Z)
  - **alpha** - alphabetic in both lowercase and uppercase (a - z, A - Z)
  - **alphanum** - alphanumeric (a - z, A - Z, 0 - 9)
  - **special** - special chars (!, @, #, etc.)
  - **all** (default) - outputs all alphanumeric and special characters
* **max** *Number* - Maximum generated string length (default of 10)
* **fixed** *Boolean* - Always generate to a fixed length? (default of false)