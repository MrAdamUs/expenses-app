import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>
        404 Page not found ! <Link to='/'>home page</Link>
      </h1>
    </div>
  );
};

export default NotFoundPage;
