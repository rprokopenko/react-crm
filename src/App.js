import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { Content, Header, Modal } from './components';

function App() {
  const dispatch = useDispatch();

  const openType = useSelector(({ modal }) => modal.openType);

  const submit = (values) => {
    console.log(values);
    axios.post('/users', values);
  };

  return (
    <div className='wrapper'>
      <Header />
      <Content />
      {openType ? <Modal onSubmit={submit} /> : null}
    </div>
  );
}

export default App;
