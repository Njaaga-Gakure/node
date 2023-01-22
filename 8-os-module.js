const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime - how long the comp has been running - in seconds
// goes to 100 seconds
console.log(`The system uptime is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMEM: os.totalmem(),
    freeMEM: os.freemem()
}

console.log(currentOS);