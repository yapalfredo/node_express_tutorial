const {readFile, writeFile} = require('fs')


console.log('start')
readFile('./content/test2.txt', 'utf8', (err, result) => {

    if (err){
        console.log(err)
        return ;
    }

    const first = result

    readFile('./content/subfolder/test.txt', 'utf8', (err, result) => {

        if (err) {
            console.log(err)
            return
        }
        const second = result
        
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`
            ,(err, result) => {
                if (err){
                    console.log(err)
                    return;
                }
                console.log(result)
                console.log('done with task')
            })
    })
})
console.log('starting the task')