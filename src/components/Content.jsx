import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers } from '../redux/actions/users';

import UserItem from './UserItem';

const Content = () => {
  const dispatch = useDispatch();

  const items = useSelector(({ users }) => users.items);
  const isLoaded = useSelector(({ users }) => users.isLoaded);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className='content'>
      <div className='container'>
        <div className='content__items content__items--block content__items--list'>
          {isLoaded ? (
            items.map((obj) => <UserItem key={obj.id} {...obj} />)
          ) : (
            <div class='lds-facebook'>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
