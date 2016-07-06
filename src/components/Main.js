require('normalize.css/normalize.css');
require('styles/App.css');
import { Link } from 'react-router';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
