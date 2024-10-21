const { isUtf8 } = require('buffer');
const fs =  require('fs');
const path = require('path');

const filePath = (__dirname,'Example.txt');
const renameFilepath = (__dirname,'Renamed.txt');

function createFile() {
    fs.writeFile(filePath,'Hello World',(err)=> {
        if (err){
            console.error(err);
            return;
        }
    console.log('File Created Succesfully.');
    readFile();
    });
}

function readFile() {
    fs.readFile(filePath,'utf8',(err,data)=>{
        if (err){
            console.error(err);
            return;
        }
    console.log('Data:',data);
    writeFile();
    });
}

function writeFile() {
    fs.appendFile(filePath,'Hi Khushi',(err)=>{
        if (err){
            console.error(err);
            return;
        }
    console.log('Write Successful');
    renameFile();
    });
}

function renameFile() {
    fs.rename(filePath,renameFilepath,(err)=>{
        if (err){
            console.error(err);
            return;
        }
    console.log('Rename succesful');
    deleteFile();
    });
}

function deleteFile() {
    fs.unlink(renameFilepath,(err)=>{
        if (err){
            console.error(err);
            return;
        }
    console.log('delete succesful');
    });
}


createFile();
