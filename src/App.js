import React from 'react';

import { Content, Header, Modal } from './components';

function App() {
  const [sort, setSort] = React.useState(false);

  return (
    <div className='wrapper'>
      <Header sort={sort} onClick={setSort} />
      <Content sort={sort} />
    </div>
  );
}

export default App;
