import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import HomePage from './pages/Homepage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AboutUs from './pages/AboutUs';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: 'graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient ({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider  client={client}>
      <ChakraProvider>
        <Router>
          <>
            <Routes>
              <Route 
                path='/' 
                element={<HomePage />} 
              />
              <Route 
                path='/sign-in' 
                element={<SignInPage />} 
              />
              <Route 
                path='/sign-up' 
                element={<SignUpPage />} 
              />
              <Route 
                path='/about-us' 
                element={<AboutUs />} 
              />
              <Route 
                path='/play-game' 
                element={<div></div>} 
              />
              <Route 
                path='*'
                element={<h1>Wrong page!</h1>}
              />
            </Routes>
          </>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
