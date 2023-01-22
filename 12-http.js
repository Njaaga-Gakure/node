const http = require('http');


/**
 * @req: incoming request
 * @res: response
 **/
const server = http.createServer((req, res) => {
    if (req.url === '/')
    {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about')
    {
        res.end('Here is a brief history of our company')
    }
    else 
    {
        res.end(`
                    <h1>Opps!</h1>
                    <p>We can't seem to find the page you are looking for</p>
                    <a href="/">Back to home page</a>
    `)
    }
})

server.listen(5000)