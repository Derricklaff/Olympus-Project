const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const path = require('path');
const http = require('http');
const cors = require('cors');
const { json } = require('body-parser');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3001;
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build/index.html')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
});

app.post('/payment', cors(), async (req, res) => {
  let {amount, id } = req.body
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'coffee',
      payment_method: 'id',
      confirm: true
    })
    console.log('Payment', payment)
    res.json({
      message: 'Payment successful',
      success: true
    })
  }catch (error) {
    console.log('Error', error)
    res.json({
      message: 'Payment failed',
      success: false
    })

  }
})

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  app.use(
    '/graphql',
    cors(),
    json(),
    expressMiddleware(server, {
      context: authMiddleware,
    }),
  );
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    })
  })
  };
  
  startApolloServer(typeDefs, resolvers);
