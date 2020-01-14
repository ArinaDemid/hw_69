import React from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Dishes from './containers/Dishes/Dishes';

const App = () => (
    <Layout>
      <Switch>
        <Route path="/" exact component={Dishes} />
        <Route path="/dishes" component={Dishes} />
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </Layout>
);

export default App;
