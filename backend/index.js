const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const gqlMuddleware = require ('express-graphql')
const {readFileSync} = require('fs')
const {join} = require ('path')
const {makeExecutableSchema} = require('graphql-tools')
const resolvers = require('./lib/resolvers')


// Intializations
const app = express();
app.use(cors())


// Settings
app.set('port', process.env.PORT || 5000);


const typeDefs = readFileSync(
  join(__dirname, 'lib','schema.graphql'),
  'utf-8'
  )
//Definiendo el esquema
const schema = makeExecutableSchema ({ typeDefs, resolvers })


// Middlewares
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', gqlMuddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))


// Global variables


// Routes
app.use(require('./Routes/index'));

// Starting
const server= app.listen(app.get('port'), () => {
  console.log('Server is in port http://localhost:5000', app.get('port'));
});


