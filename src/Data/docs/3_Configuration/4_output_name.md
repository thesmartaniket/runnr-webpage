# Output File Name
```bash
$FILE : It sets the output name to be same as input file name but without the extension.
$NONE : It is mostly used for interpreter based languages, as those don't have any compiled file.
        Using $NONE on compiled based languages, turns off generation of any custom output file.

<any-custom-name> : Creates an output file with the given name.
```
- Examples:
```bash
#for javascript
(.js)::INTERPRETER="node", OUTPUT_FILENAME="$NONE"
```

For interpreter based languages, it is optional to set "OUTPUT_FILENAME" argument.