import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

// Example of user roles: ['GUEST', 'USER', 'ADMIN'];

function AuthGuard({ roles, children }) {
  const auth = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (!auth.loggedIn || !auth.user) {
      history.push('/auth/login');
      return;
    }

    if (!roles.includes(auth.user.role)) {
      history.push('/errors/error-401');
    }
  }, [history, roles, auth.loggedIn, auth.user]);

  return <>{children}</>;
}

AuthGuard.propTypes = {
  children: PropTypes.node,
  roles: PropTypes.array.isRequired
};

export default AuthGuard;
