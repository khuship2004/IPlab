const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'example.txt');
const newfilepath = path.join(__dirname, 'renamedfile.txt');

function createFile() {
    fs.writeFile(filepath, 'Hello, World!', (err) => {
        if (err) {
            console.error('Error creating file:', err);
            return;
        }
        console.log('File created successfully.');
        readFile(); 
    });
}

 function readFile() {
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
        writeFile(); 
    });
}

function writeFile() {
    fs.appendFile(filepath, '\nAppending new data.', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('Data written to file successfully.');
        renameFile(); 
    });
}

function renameFile() {
    fs.rename(filepath, newfilepath, (err) => {
        if (err) {
            console.error('Error renaming file:', err);
            return;
        }
        console.log('File renamed successfully.');
        deleteFile();
    });
}

function deleteFile() {
    fs.unlink(newfilepath, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
            return;
        }
        console.log('File deleted successfully.');
    });
} 

createFile(); 
/*readFile();
writeFile();
renameFile();
deleteFile();
*/