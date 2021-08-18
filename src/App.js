import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Layout from './components/UI/Layout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
