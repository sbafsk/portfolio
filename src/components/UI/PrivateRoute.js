import { Redirect, Route } from 'react-router-dom';

import { useAuth } from '../../api/AuthContext';
import Layout from './Layout';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
