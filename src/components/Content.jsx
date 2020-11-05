import React from 'react';

import UserItem from './UserItem';

const Content = () => {
  return (
    <div class='content'>
      <div class='container'>
        <div class='content__items content__items--block content__items--list'>
          <UserItem />
        </div>
      </div>
    </div>
  );
};

export default Content;
