const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname.startsWith('/api/pw')) {
        res.setHeader('Content-Type', 'application/json');
        const pw = process.env.LYXWEB_PW || 'fail';
        if (url.searchParams.get('verify') == pw) {
            res.end(JSON.stringify({
                verify: 'true',
                location: 'self.html'
            }));
        } else {
            res.end(JSON.stringify({
                verify: 'false',
                location: 'index.html'
            }));
        }

    } else if (url.pathname.startsWith('/api/comments') && req.method === 'POST') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            let parsedData = JSON.parse(body);
            let data = {
                content: parsedData.content,
                name: parsedData.name,
                time: parsedData.time
            }
            fs.readFile('v4/comments.json', (err, original) => {
                if (err) {
                    console.log(err);
                    res.end('false');
                    return;
                } else {
                    res.end('true');
                }
                const parsedOriginal = JSON.parse(original);
                const output = [data, ...parsedOriginal];
                // parsedOriginal[parsedOriginal.length] = data;
                // parsedOriginal.unshift(data);
                fs.writeFile('v4/comments.json', JSON.stringify(output), (err) => {
                    if (err) {
                        console.log(err);
                        res.end('false');
                        return;
                    } else {
                        res.end('true');
                    }
                })
            })
        })

    } else if (url.pathname.startsWith('/api/')) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World \n API is working');
    }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});