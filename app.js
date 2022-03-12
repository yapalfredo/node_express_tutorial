// npm - global command, comes with node
// npm --version

// local dependency - use it only it this particular project
// npm i <packageName>

// gobal dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)


// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


// const _ = require('lodash')

// const items = [1, [2, [3, [4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)

// const getText = (path) => {
//     return new Promise ((resolve, reject) => {
//         readFile(path, 'utf8', (err,data) => {
//             if (err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const {readFile, writeFile} = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./content/test2.txt', 'utf8')
        const second = await readFile('./content/subfolder/test.txt', 'utf8')
        await writeFile('./content/result-mind-buggling.txt', `THIS IS JUST SAMPLE: ${first} ${second}`,
         {flag: 'a'})

        console.log(first)
        console.log(second)
    } catch (error) {
        console.log(error)
    }
}

start()