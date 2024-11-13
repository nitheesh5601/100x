// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs')

const filepath = 'a.txt'

fs.readFile('a.txt','utf-8',(err,data)=>{
    if(err){
        console.error('Error handling file: '+ err)
        return
    }else{
        console.log('file content: '+data)
    }
})

function expensive(){
    let sum =0;
    for(let i=1;i<100;i++){
        sum += i;
    }
    console.log('expensive operation; '+sum)
}

expensive();