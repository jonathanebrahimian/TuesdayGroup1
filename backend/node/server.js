const express = require('express');
const app = express();
app.use(express.json());
var mysql = require('mysql')

app.get('/', (req, res) => {
    res.send('HELLO WORLD!');
});

var con = mysql.createConnection({
    host: 'localhost',
    port: '8080',
    user: 'root',
    password: 'Password',
    database: 'forces'
});

con.connect(function(err) {
    if (err) throw err;
});

var router = express.Router()
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});

app.use('/api', router)
// GET
// api/getit
router.get('/soldiers', function(req, rest) {
    con.query('SELECT * FROM soldiers', function(err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // result in JSON format
    });
});

router.put('/update/soldier', function(req, rest) {
    var id = req.param('id');
    var name = req.param('name')
    var age = req.param('age')
    var gender = req.param('gender')
    var branch = req.param('branch') 
    var rank = req.param('rank')
    var base = req.param('base')
    var username = req.param('username')
    var password = req.param('password')
    con.query('UPDATE soldiers SET SoldierID = ?, Name = ?, Age = ?, Gender = ?, Branch = ?, Rank = ?, Base = ?, Username = ?, Password = ? WHERE SoldierID = ?', [name, age, gender, branch, rank, base, username, password, id], function(err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // result in JSON format
    });
});

router.get('/soldier', async(req, rest) {
    var id = req.param('id');
    con.query('SELECT * FROM soldiers WHERE SoldierID = ?', id, function(err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // result in JSON format
    });
});

router.delete('/delete/soldier', function(req, rest) {
    var id = req.param('id');
    con.query('DELETE FROM soldiers WHERE SoldierID = ?', id, function(err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // result in JSON format
    });
});


//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
