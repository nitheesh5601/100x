// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs').promises

async function cleanFile(file){
    try {
        const content = await fs.readFile(file,'utf-8');

        const clearedContent = content.replace(/\s+/g,' ').trim();

        await fs.writeFile(file,clearedContent);

        console.log("File is cleared and updated")
    } catch (error) {
        console.log("error cleaning file: "+error)
    }
}

const file = 'b.txt'
cleanFile(file)