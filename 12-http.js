const http = require('http');

const server = http.createServer((req,res) => {

    // res.write('Hello World')
    // res.end()

    if (req.url === '/'){
        res.end("Hello World")
    }

    if (req.url === '/about'){
        res.end("This is about us page")
    }

    res.end(`
    <h1> Ooopss! </h1>
    <div>
        <p> We can't seem to find what you are looking for </p>
        <a href="/">go back </a>
    </div>
    `)

})

server.listen(5000)