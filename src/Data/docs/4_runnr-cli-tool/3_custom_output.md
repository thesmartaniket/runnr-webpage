# Custom output file name for Compiled programs

We can make runnr to output the compiled executable file-name as we want it to be instead of default set value from config.

Examples:
```bash
$ runnr -run N -out helloworld hello.cpp
$ ./helloworld
Hello, World
```
>Yes, we can use these different options and parameters all together.
So, "-out" option takes only one parameter that is the file name of the output file.