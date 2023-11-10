# More runnr options

- ### Debug:

Sometimes developers need to see what is actually getting executed by runnr to find any error or mis-compilation of programs & executions. To solve this a particular option is to be used called "-debug".

Examples:
```bash
$ runnr -debug -out helloworld -param "-std=c++11" hello.cpp
runnr: debug: config: using config from /Users/aniket/.config/runnr.conf
runnr: debug: executed: g++ -std=c++11 -o helloworld hello.cpp
runnr: debug: run: ./helloworld
Hello, World
```

Using the "-debug" gives a detailed output of the underneath commands execution.

- ### Version:
To check the version of runnr:

```bash
$ runnr --version
v0.x.x
$ runnr -V
v0.x.x
```

- ### Help:

```bash
$ runnr --help
$ runnr -h
```

- ### Update:
Update runnr using `--update or -U` option. It uses pip to update itself.
```bash
$ runnr --update
$ runnr -U
```