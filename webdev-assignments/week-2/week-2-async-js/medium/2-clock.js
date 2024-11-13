// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


// function time(){
//     console.clear();
//     const time = new Date();
//     let hour = time.getHours();
//     let minutes = time.getMinutes();
//     let seconds = time.getSeconds();

//     let amorpm = hour>12?"PM":"AM";
//     console.log(`${hour} : ${minutes} : ${seconds} : ${amorpm}`);
// }

// setInterval(time,1000);

function formatTime(date, use24Hour = true){
    const hours = use24Hour ? date.getHours():(date.getHours()%12 || 12)
    const minute = date.getMinutes().toString().padStart(2,'0');
    const seconds = date.getSeconds().toString().padStart(2,'0');
    const amorpm = use24Hour ? '' : (date.getHours()>=12 ? "PM" : "AM")

    return (`${hours.toString().padStart(2,'0')} : ${minute} : ${seconds} : ${amorpm ? '' + amorpm : ''}`)
}
function displayTime(){
    console.clear();
    const now = new Date();
    const Formatof24 = formatTime(now)
    const Formatof12 = formatTime(now,false)

    console.log(`24hr format: ${Formatof24}`)
    console.log(`12hr format: ${Formatof12}`)
}
function startClock() {
    displayTime();
    setInterval(displayTime, 1000);
}

startClock();

console.log("Press Ctrl+C to stop the clock.");