// OS modules  -> Features to interact with the operational system aswell as the server
const os = require('os')

// Info about the user
const user = os.userInfo()
console.log(user)


// Method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);