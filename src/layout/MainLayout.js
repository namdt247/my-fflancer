import React from 'react';

function MainLayout(props) {
  return (
    <div>
      Main layout
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default MainLayout;
