//prompting the user for input
let speed = parseInt(prompt("Enter car speed"));
function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    if (speed < speedlimit) {
        console.log("Ok");
    }else {
        const demeritPoints = Math.abs((speed-speedlimit)/kmPerDemeritPoint);
        if(demeritPoints>12){
            console.log("License suspended");
        }else{
            console.log(`Points:${demeritPoints}`);
    }
        
    }
}  
//to display result
speedDetector(speed);
