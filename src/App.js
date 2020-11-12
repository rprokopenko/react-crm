import React from 'react';
import { useSelector } from 'react-redux';

import { Content, Header, Modal } from './components';

function App() {
  const openType = useSelector(({ modal }) => modal.openType);

  return (
    <div className='wrapper'>
      <Header />
      <Content />
      {openType ? <Modal /> : null}
    </div>
  );
}

export default App;
