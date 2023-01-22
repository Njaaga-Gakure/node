const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome, this is the homepage')
    } else if (req.url === '/about') {
        // Blocking code (synchronous code)
        // run to see the problem that arises
            for(let i = 0; i < 100; i++) {
                for (let j = 0; j < 1000; j++) {
                    console.log(`${i}, ${j}`);
                }
            }
            res.end('This is the about page')
    } else {
        res.end (
            `<p>Can't seem to find the page your are looking for.</p>
            <a href="/">Back to home page</a>`
        )
    }
})


server.listen(5000, () => {
    console.log('Server is Listening on port 5000...');
})