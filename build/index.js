'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _categories = require('./src/schemas/categories');

var _categories2 = _interopRequireDefault(_categories);

var _users = require('./src/schemas/users');

var _users2 = _interopRequireDefault(_users);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _create = require('./src/resolvers/create');

var _verify = require('./src/resolvers/verify');

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphql = require('./src/graphql');

var _graphql2 = _interopRequireDefault(_graphql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var jsonParser = _bodyParser2.default.json();
var port = process.env.port || 3000;

app.get('/', function (req, res) {
    res.send('Hello world');
});
app.listen(port, function () {
    console.log('Server WORKS on port ' + port);
});
_mongoose2.default.connect('mongodb://backendCaro:backendCaro123@ds121753.mlab.com:21753/backend');
//mongoose.connect('mongodb://gabo16:gabo16@ds123173.mlab.com:23173/backend');
var db = _mongoose2.default.connection;
db.on('error', function () {
    return console.log("failed to connect to database");
}).once('open', function () {
    return console.log("Connected to the data base ", port);
});

app.get('/userlist', function (req, res) {
    Client.find({}).then(function (users) {
        res.send(users);
    });
});

app.get('/add-client', function (req, res) {
    var client = new Client({
        name: "CLIENTAZO",
        lastName: "DESDE EXPRESS",
        age: 100
    });

    client.save(function (err) {
        if (err) throw err;
        res.send('Cliente creadoouu');
    });
});

app.get('/find-client', function (req, res) {

    Client.find({ 'name': 'CLIENTAZO' }).then(function (clients) {
        res.send(clients);
    });
});

app.get('/register', jsonParser, function (req, res) {

    console.log(req.body);
    var user = new _users2.default(req.body);

    user.save(function (err) {
        if (err) throw err;
        res.send("usuario registrado");
    });
});

app.use('/login', jsonParser, function (req, res) {
    if (req.method === 'POST') {
        var token = (0, _create.createToken)(req.body.email, req.body.password).then(function (token) {
            res.status(200).json({ token: token });
        }).catch(function (err) {
            console.log(err);
            res.status(403).json({
                message: 'Login Failed, INVALID CREDENTIALS'
            });
        });
    }
});

app.use('/verifyToken', jsonParser, function (req, res) {
    if (req.method === 'POST') {
        try {
            var token = req.headers['authorization'];
            (0, _verify.verifyToken)(token).then(function (user) {
                res.status(200).json({ user: user });
                console.log(user);
            }).catch(function (err) {
                console.log(err);
            });
        } catch (e) {
            console.log(e.message);
            res.status(401).json({
                message: e.message
            });
        }
    }
});

app.get('/add-category', function (req, res) {
    var category = new _categories2.default({
        name: "Drama",
        description: ""
    });

    category.save(function (err) {
        if (err) throw err;
        res.send('Category creado');
    });
});

//Middleware
app.use('/graphql', function (req, res, next) {
    var token = req.headers['authorization'];
    try {
        req.user = (0, _verify.verifyToken)(token);
        next();
    } catch (er) {
        res.status(401).json({
            message: er.message
        });
    }
});

app.use('/graphql', (0, _expressGraphql2.default)(function (req, res) {
    return {
        schema: _graphql2.default,
        graphiql: true,
        pretty: true,
        context: {
            user: req.user
        }
    };
}));