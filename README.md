An exercise in creating a random string generator helper function which provides some general all around usefulness.

##Usage
```javascript
/* 
 * Random alphanumeric string (including special characters) of random length 
 * default max length of 10 chars
 */
var random = generateRandomString();

/*
 * Random alphanumeric string of random length 
 * max limit of 30 chars
 */
var random = generateRandomString('alphanum', 30);

/*
 * Random numeric string with a fixed character length of 10 chars
 */
var random = generateRandomString('num', 10, true);
```

##Arguments
- **type** *String* - Character type
  - **num** - numeric (0 - 9)
  - **alphalc** - alphabetic lowercase (a - z)
  - **alphauc** - alphabetic uppercase (A - Z)
  - **alpha** - alphabetic in both lowercase and uppercase (a - z, A - Z)
  - **alphanum** - alphanumeric (a - z, A - Z, 0 - 9)
  - **special** - special chars (!, @, #, etc.)
  - **all** (default) - outputs all alphanumeric and special characters

- **max** *Number* - Max length of generated string (default of 10)

- **fixed** *Boolean* - Generate to a fixed length? (default of false)
