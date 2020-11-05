import React from 'react';

import UserItem from './UserItem';

const Content = ({ sort }) => {
  return (
    <div className='content'>
      <div className='container'>
        <div className='content__items content__items--block content__items--list'>
          <UserItem sort={sort} />
        </div>
      </div>
    </div>
  );
};

export default Content;
