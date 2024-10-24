const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'example.txt');
const renamedfilepath = path.join(__dirname, 'renamedexample.txt');

function createFile(){
    fs.writeFile(filepath,'Hello world',(err) => {
        if (err){
            console.error(err);
            return;
        }
        console.log('File created.');
    
    });
};

function readFile(){
    fs.readFile(filepath,'utf8',(err,data) => {
        if (err){
            console.error(err);
            return;
        }
        console.log('Data:',data);
    })
}

function writeFile(){
    fs.appendFile(filepath,'Hi Khushi',(err) =>{
        if (err){
            console.error(err);
            return;
        }
        console.log('Data written');
    })
}


function renameFile(){
    fs.rename(filepath,renamedfilepath,(err) =>{
        if (err){
            console.error(err);
            return;
        }
        console.log('File renamed');
    })
}

function deleteFile(){
    fs.unlink(renamedfilepath,(err) => {
        if(err){
            console.error(err);
            return;
        }
        console.log('file deleted');
    })
}

deleteFile();
