import React from 'react';

import './Layout.scss';

function Layout({
   ...props
}) {

  return (
    <div className="Layout">
      <div className="Container">
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
