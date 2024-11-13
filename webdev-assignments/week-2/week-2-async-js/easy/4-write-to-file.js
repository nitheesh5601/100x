// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs')

const data = "File is written"

function expensive(){
    let sum =0;
    for(let i=1;i<100;i++){
        sum += i;
    }
    console.log('expensive operation; '+sum)
}

fs.writeFile('a.txt',data,(err)=>{
    if(err){
        console.error('Error handling file: '+ err)
        return
    }
    console.log('Data is written')
})

expensive();