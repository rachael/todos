import React from 'react';

import { Header } from '../Header';
import './Layout.scss';

function Layout({
   ...props
}) {

  return (
    <div className="Layout">
      <div className="Container">
        <Header />
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
