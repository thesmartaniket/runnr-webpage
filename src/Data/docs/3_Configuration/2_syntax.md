# Syntax and Rules
- ### Syntax of the config file:

```bash
(<extension>) :: <arguemnt1> = "<parameter1>",  <arguemnt2> = "<parameter2>", ....
```
All `<argument> = <parameter>` are separateed using ','. You can even comment in this config file using '#' and white Spaces are ignored automatically.

- Example:

```bash
#for adding support for .c files, we simply can write:-
(.c) :: COMPILER = "gcc", OUTPUT_FILENAME="$FILE"
```

The extension must be enclosed withing parenthese: "()". Then the respective arguments & parameters are writen after using argument separator: "::". The arguments must be separated using "," and every argument must have its value/parameter enclosed withing double qoutes: "".