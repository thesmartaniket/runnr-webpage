# Arguments
- ### More compiler arguments:
There may be some cases where we need to pass more compiler arguemnts to compile it. For example, in C++ we might need to tell the compiler to use C++11, as we have used 'auto' data-type in out program. 

This can be achieved by two ways:

- Parmanent:
Modifying the "runnr.conf" file for ".cpp" extension.

Examples:
```bash
#this will use C++11 std library
(.cpp)::COMPILER="g++ -std=c++11", OUTPUT_FILENAME="a.out"
```

- Temporary:
For single file use cases.

Examples:
```bash
$ runnr -param "-std=c++11" -out helloworld hello.cpp
```

"-param" takes the compiler arguemnt and directly pass it to the compiler. It is also a good practice to wrap them in "". "-param" can also be used to link to libaries too.

```bash
$ runnr -param -lm -out sqrt square_root.c
```

- ### Execuable file's command-line arguemnts:
You might write some programs that takes command line arguments directly, as runnr can compile and execute simultaneously, you might want to pass the necessary arguments to the program. This can be achieved by using "-args".

Suppose we have written a program which takes 2 number directly from command line like "./a.exe 5 7" & outputs its sum. Lets see how to do that with runnr.

Examples:

```bash
$ runnr -args "5 7" sum_2_no.c
12
```

Again it is necessary to wrap the arguments within "" as it containes spaces.