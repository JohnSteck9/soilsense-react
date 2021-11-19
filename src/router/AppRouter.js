import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddItem from '../components/AddItem';
import ItemsList from '../components/ItemsList';
import EditItem from '../components/EditItem';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
            <Switch>
              <Route component={ItemsList} path="/" exact={true} />
              <Route component={AddItem} path="/add" />
              <Route component={EditItem} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
