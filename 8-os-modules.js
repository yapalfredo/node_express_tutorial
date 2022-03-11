const os = require('os')


// current use info
const user = os.userInfo()

console.log(user)


// system uptime in seconds
console.log(`The system update is ${os.uptime()} seconds` )


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)