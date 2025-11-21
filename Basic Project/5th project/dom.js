// first we make a function 
// hex contain hex up to 16 number
// to change color we use # and then use for loop

const randomcolor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalid;    // this is use for global variable it can access out of functions 
const startChangingColor = function () {
    if (!intervalid) {
        intervalid = setInterval(chnageBgcolor, 1000);         //we used condition here after every 1 sec it change the color
    }
    function chnageBgcolor() {
        document.body.style.backgroundColor = randomcolor();        // this is use to change color and call the above function 
    }
};
const stopChanginColor = function () {
    clearInterval(intervalid);                            // this is for clear the interval or stop 
    intervalid = null;                                    // we use null to perform over code better
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChanginColor);
    