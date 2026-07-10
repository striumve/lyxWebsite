const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const session = require('express-session');

const app = express();
const server = http.createServer(app);

// Express 中间件配置
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(session({
    secret: '123456789' + Date.now(),
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600000
    } // 1小时过期
}));

// 静态文件服务
// app.use(express.static(path.join(__dirname)));

// 验证中间件
const verifyMiddleware = (req, res, next) => {
    if (req.session.verified) {
        return next();
    }
    res.sendFile(path.join(__dirname, 'api', 'pw.html'));
};

app.get('/api/self', verifyMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, 'api', 'self.html'));
});

app.get('/api/pw', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const pw = process.env.LYXWEB_PW || 'fail';
    const verify = req.query.verify;

    if (verify == pw) {
        req.session.verified = true;
        res.json({
            verify: 'true',
            location: '/api/self'
        });
    } else {
        req.session.verified = false;
        res.json({
            verify: 'false',
            location: '/v4/'
        });
    }
});

app.post('/api/comments', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log('api.comments');

    const parsedData = req.body;
    let data = {
        content: parsedData.content,
        name: parsedData.name,
        time: parsedData.time
    };

    fs.readFile(path.join(__dirname, 'v4', 'comments.json'), (err, original) => {
        if (err) {
            res.status(500).json({
                status: '500',
                redirect: '/error/500.html'
            });
            return;
        }

        const parsedOriginal = JSON.parse(original);
        const output = [data, ...parsedOriginal];

        fs.writeFile(path.join(__dirname, 'v4', 'comments.json'), JSON.stringify(output), (err) => {
            if (err) {
                res.status(500).json({
                    status: '500',
                    redirect: '/error/500.html'
                });
            } else {
                res.status(200).json({
                    status: '200',
                    redirect: ''
                });
            }
        });
    });
});

app.get('/api/', (req, res) => {
    res.status = 200;
    res.sendFile(path.join(__dirname, 'api', 'apistatus.html'));
});

app.get('/read', (req, res) => {
    // res.status = 200;
    const requestPath = req.query.f;
    const rendererPath = path.join(__dirname, 'public', 'mdRenderer.html');
    let html = fs.readFileSync(rendererPath, 'utf-8');
    html = html.replace('{{ FILE }}', requestPath || 'False');
    html = html.replace('{{ TYPE }}', path.extname(requestPath) || 'False');
    res.send(html);
});


const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});