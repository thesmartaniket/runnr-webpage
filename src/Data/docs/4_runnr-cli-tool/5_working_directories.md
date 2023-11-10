# Paths and Working Directories

- ### Current-Working-Directory specific config files:

When building a project with multiple files, it may be required to use some certian version specific tools, compilers, interpreters. Managing them globally throughout the system
with different projects becomes challenging. To tackle this problem Directory specific runnr-config files can be created which can have different version tools, compilers & interpreters from the rest of the system.

runnr from and after `v0.3.0` first checks if a config file exists in current working directory or not. If exists then runnr uses that config file else it uses the set/default config file.

To initialize a directory specific config file in runnr use "init" or "-i" option:

```bash
$ runnr init
$ runnr -i
```

This will create a empty config file in the directory it was initialized from. Now add all the configs you need to this new config file which will only work for this directory.

- -default:

Sometimes you might want to use configs from your set/default config file instead of the working-directory one. Use "-default" or "-d" option for that:

```bash
$ runnr -default ...args <file>
```

- "-default" option must be specified first before any other option or files.

- ### Setting and reseting config file path:

- Set Path:
runnr allows developers to set a custom config file to load configs from.

For setting custom config file name use "--set-path" option, it takes `<full-path>` as argument.

```bash
$ runnr --set-path "/Users/aniket/Desktop/myConfig.conf"
```

- Reset Path:
For reseting the config file path to default "runnr.conf" use "--remove-path" option.

```bash
$ runnr --remove-path
```

- Reset Path & Data:
For reseting the config file path to default "runnr.conf" with its default configurtaions data use "--reset-config" option.

```bash
$ runnr --reset-config
```