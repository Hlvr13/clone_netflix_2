'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _user = require('./src/schemas/user');

var _user2 = _interopRequireDefault(_user);

var _movie = require('./src/schemas/movie');

var _movie2 = _interopRequireDefault(_movie);

var _genre = require('./src/schemas/genre');

var _genre2 = _interopRequireDefault(_genre);

var _create = require('./src/resolvers/create');

var _verify = require('./src/resolvers/verify');

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphql = require('./src/graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JsonParser = _bodyParser2.default.json(); //import functions from 'firebase-functions';


var app = (0, _express2.default)();

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('Server works in PORT ' + PORT);
});

app.use((0, _cors2.default)());

_mongoose2.default.connect('mongodb://lvr:lvr123@ds117469.mlab.com:17469/clone_netflix2018', { useNewUrlParser: true });

var dataBase = _mongoose2.default.connection;

dataBase.on('error', function () {
    console.log("Failled to connect to MongooseDB.");
}).once('open', function () {
    console.log('Connected to MongooseDB.');
});

app.get('/checkServer', function (req, res) {
    //response.set('Cache-Control','public','max-age=300','s-maxage=600');
    res.send('Server working.');
});

/*app.get('/addUser', (req,res) => {
    var user = new User({
        'firstName':'Levi',
        'lastName':'Vazquez',
        'email':'prueba@gmail.com',
        'password':'123456789',
        'phone':'6622272196',
    })

    user.save((err) => {
        if(err) throw err
        res.send('Usuario creado exitosamente.');
    })
})*/

app.get('/userList', function (req, res) {
    _user2.default.find({}).then(function (users) {
        res.send(users);
    });
});

//ENDPOINT PARA REGISTRAR USUARIOS//

app.post('/register', JsonParser, function (req, res) {
    var user = new _user2.default(req.body);

    user.save(function (err) {
        if (err) throw err;
        res.send('Usuario registrado.');
    });
});

//ENDPOINT LOGIN//
app.use('/login', JsonParser, function (req, res) {
    if (req.method === 'POST') {
        //Creates token
        var token = (0, _create.createToken)(req.body.email, req.body.password).then(function (token) {
            res.status(200).json({ token: token });
        }).catch(function (err) {
            res.status(403).json({
                message: 'Login FAILED. Invalid credentials.'
            });
        });
    }
});

/* //Verificar el token por medio de INSOMNIA con post//
*   Bearer -> Bearer Tokern
*       Token: 
*       Prefix: JWT
*/
app.use('/verifyToken', JsonParser, function (req, res) {
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
                //MOSTAR MENSAJE SI EL TOKEN NO FUNCA
                message: e.message
            });
        }
    }
});

//Middleware
app.use('/graphql', function (req, res, next) {
    var token = req.headers['authorization'];
    try {
        req.user = (0, _verify.verifyToken)(token);
        next();
    } catch (e) {
        res.status(401).json({
            message: e.message
        });
    }
});

//Utilizar graphiQL para ingresar o ver valores 
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

//exports.app = functions.https.onRequest(app);