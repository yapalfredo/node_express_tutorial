const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/test2.txt','utf8')
const second = readFileSync('./content/subfolder/test.txt','utf8')


writeFileSync('./content/result-sync.txt',
`Here is the result: ${first}, ${second}`,
{flag: 'a'}
)