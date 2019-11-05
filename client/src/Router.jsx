import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './components/routes';
import { Post } from './routes/Post';

const Router = () => {
  return (
    <Switch>
      <PublicRoute
        path="/"
        exact
        restricted={false}
        component={() => <div>Home page</div>}
      ></PublicRoute>
      <PublicRoute path="/post" exact restricted={false} component={Post}></PublicRoute>
      <PrivateRoute path="/mypage" exact component={() => <div>my page</div>}></PrivateRoute>
      <Redirect from="*" to="/" />
    </Switch>
  );
};
export default Router;
