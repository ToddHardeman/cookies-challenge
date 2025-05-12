const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const port = 8080;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}
);

app.get('/', (req, res) => {
    const name = req.cookies.name;
    if (name) {
        res.send(`Welcome ${name}!`);
    } else {
        res.send('Welcome! Please set your name by visiting /login?name=YourName');
    }
});

app.get('/login', (req, res) => {
    const name = req.query.name;
    if (name) {
        res.cookie('name', name, {
            httpOnly: true,
        });
        res.send(`Welcome ${name}! your name has been saved in a cookie.`);
    } 
    else 
    {
        res.send('request is not working')
    }

}
);