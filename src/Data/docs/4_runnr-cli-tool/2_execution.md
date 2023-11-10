# Executing Different Programs
- ### Comiling or Interpreting a file:
runnr can compile or interpret different programs based on extensions from "runnr.conf" file. Now lets see some examples. Suppose we have "hello.py" & "hello.cpp" file with "Hello, World" printing program.

Then to run this files:
``` bash
$ runnr hello.py
Hello, World
```


```bash
$ runnr hello.cpp
Hello, World
```

It can execute different files based on .conf file.
* It is important to note that the file that is being compiled/interpreted must be the last argument, after any options.

- ### Only compiling not executing:
We can make runnr to only compile a programs but not execute it by using '-run' option.

Example:
```bash
$ runnr -run N hello.cpp
```

It outputs nothing as we set running after compilation to off. It just generates the binary executable file.

This option only works for compiled based programs like C, C++, rust. The "-run" option's parameter can be either "Y" or "N".

- ### Executing multiple files at once:
Multiple different or same files can be executed simultaneously using "-files" option.

```bash
$ runnr -run N -files hello.c hello.py hello.cpp sum.c
```

- By default all the input files gets executed. Use `-run N` to turn it off for compiled based language.
- If any custom output file-name in set in the config or by using `-out` option, it will be ignored and the executable output name will be same as of the file-name without the extension.
- After "-files" option all the arguments must be files.
- For using "-args" option, all the executable will recieve same command-line argument.
- "-param" option is ignored while using "-files", otherwise it will result in passing of same compiler/interpreter parameter to different compiler/interpreter. It is recommended to set these parameter options in config-file instead.
- Opening of multiple files using "-open" isn't implemented yet.