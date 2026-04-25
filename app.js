const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const session = require('express-session');

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
        // res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log('api.comments');


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
            fs.readFile(path.join(__dirname, 'v4', 'comments.json'), (err, original) => {
                if (err) {
                    res.statusCode = 500;
                    res.end(JSON.stringify({
                        status: '500',
                        redirect: '/error/500.html'
                    }));
                    return;
                }
                const parsedOriginal = JSON.parse(original);
                const output = [data, ...parsedOriginal];
                fs.writeFile(path.join(__dirname, 'v4', 'comments.json'), JSON.stringify(output), (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({
                            status: '500',
                            redirect: '/error/500.html'
                        }));
                        return;
                    } else {
                        res.statusCode = 200;
                        res.end(JSON.stringify({
                            status: '200',
                            redirect: ''
                        }));
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