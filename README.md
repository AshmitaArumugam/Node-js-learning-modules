# File System (fs) Module Practice

This file demonstrates basic file and folder operations in Node.js 
using the built-in `fs` (File System) module.

## What this code does

1. **Check & Create Folder**
   - Checks if the `docs` folder exists using `fs.existsSync()`
   - If it doesn't exist, creates it using `fs.mkdir()`

2. **Write File** *(currently commented out)*
   - Creates a text file (`file1.txt`) inside the `docs` folder
   - Writes sample content into it using `fs.writeFile()`

3. **Read File** *(currently commented out)*
   - Checks if the file exists
   - Reads its content using `fs.readFile()` and logs it to the console

4. **Delete File**
   - Checks if `file1.txt` exists
   - Deletes it using `fs.unlink()`

5. **Delete Folder**
   - Removes the `docs` folder using `fs.rmdir()`

## Key Concepts Practiced
- `fs.existsSync()` — synchronous check for file/folder existence
- `fs.mkdir()` — create a folder (async)
- `fs.writeFile()` — write content to a file (async)
- `fs.readFile()` — read content from a file (async)
- `fs.unlink()` — delete a file (async)
- `fs.rmdir()` — delete a folder (async)
- All async methods here use **callback-based** error handling (`err` first pattern)

## Note
- Some sections are commented out for step-by-step testing (write → read → delete flow)
- File paths use relative paths (`./docs/...`) based on where the script is run from

## Possible Improvements
- Switch to `fs.promises` or `fs/promises` with `async/await` for cleaner code
- Use `fs.rm()` instead of deprecated `fs.rmdir()` for folder deletion (Node v14.14+)
- Add proper folder path consistency (there's a mismatch: `./practice_node/docs` in check vs `./docs` in mkdir)
