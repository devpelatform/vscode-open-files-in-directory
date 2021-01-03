# vscode-open-files-in-directory 

A vscode extension to open a directory-load of files. 

![](./app-demo.gif)

## Features

This extension adds the option to the file explorer (and the command options, accessed with ctrl + shift + p, or cmd + shift + p on mac), to open all the files in the directory. If the selected item is a file it selects the parent directory, if its a directory it'll use that directory.

## Extension Settings

* `vscode-open-files-in-directory.maxRecursiveDepth` - Maximum depth to traverse through subfolders: ` default: 1`
* `vscode-open-files-in-directory.maxFiles` - Maximum number of files to open in one action: `default: 10`

## Known Issues

None currently 👀

## Release Notes

### *1.0.0*

Initial release of vscode-open-files-in-directory. 
Adds ability to open all files within a directory, both recursively and non.
Allows specifying depth of recursion and maximum number of files to open. 

-----------------------------------------------------------------------------------------------------------
## LICENSE

MIT

**Enjoy!**
