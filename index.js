//import functions from 'firebase-functions';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './src/schemas/user';
import Movie from './src/schemas/movie';
import Genre from './src/schemas/genre';
import { createToken } from './src/resolvers/create';
import { verifyToken } from './src/resolvers/verify';
import graphQLHTTP from 'express-graphql';
import schema from './src/graphql';
import cors from 'cors';

const JsonParser = bodyParser.json();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server works in PORT ${PORT}`);
});

app.use((cors()));

mongoose.connect('mongodb://lvr:lvr123@ds117469.mlab.com:17469/clone_netflix2018',{useNewUrlParser:true});

const dataBase = mongoose.connection;

dataBase.on('error', () => {
    console.log("Failled to connect to MongooseDB.")
}).once('open', () => {
    console.log('Connected to MongooseDB.')
});

app.get('/checkServer', (req,res) => {
    //response.set('Cache-Control','public','max-age=300','s-maxage=600');
    res.send('Server working.');
})

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

app.get('/userList',function(req,res){
    User.find({}).then(function(users){
        res.send(users);
    });
});

//ENDPOINT PARA REGISTRAR USUARIOS//

app.post('/register', JsonParser, (req,res) => {
    var user = new User(req.body);

    user.save((err) => {
        if(err) throw err;
        res.send('Usuario registrado.');
    })
})

//ENDPOINT LOGIN//
app.use('/login', JsonParser, (req,res) => {
    if(req.method === 'POST'){
        //Creates token
        const token = createToken(req.body.email, req.body.password).then((token)=>{
            res.status(200).json({token});
        })
        .catch((err)=>{
            res.status(403).json({
                message: 'Login FAILED. Invalid credentials.'
            })
        })
    }
})



/* //Verificar el token por medio de INSOMNIA con post//
*   Bearer -> Bearer Tokern
*       Token: 
*       Prefix: JWT
*/
app.use('/verifyToken',JsonParser, (req,res) => {
    if(req.method === 'POST'){
        try{
            const token = req.headers['authorization']
            verifyToken(token)
            .then(user => {
                res.status(200).json({user});
                console.log(user);
            })
            .catch(err => {
                console.log(err);
            })
    
        } catch(e){
            console.log(e.message);
            res.status(401).json({
                //MOSTAR MENSAJE SI EL TOKEN NO FUNCA
                message: e.message
            })
        }
    }
})

//Middleware
app.use('/graphql', (req,res,next) =>{
    const token = req.headers['authorization']
    try{
        req.user = verifyToken(token);
        next();
    } catch(e){
        res.status(401).json({
            message: e.message
        })
    }
})

//Utilizar graphiQL para ingresar o ver valores 
app.use('/graphql', graphQLHTTP((req,res) => ({
    schema,
    graphiql: true,
    pretty: true,
    context:{
        user:req.user
    }
})))

//exports.app = functions.https.onRequest(app);
