import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers } from '../redux/actions/users';

import UserItem from './UserItem';

const Content = () => {
  const dispatch = useDispatch();

  const items = useSelector(({ users }) => users.items);
  const isLoaded = useSelector(({ users }) => users.isLoaded);
  const filterName = useSelector(({ users }) => users.filterName);

  const filterItems = items.filter((item) => item.name.toLowerCase().includes(filterName.toLowerCase()));
  console.log(filterItems);
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className='content'>
      <div className='container'>
        <div className='content__items content__items--block content__items--list'>
          {isLoaded ? (
            filterItems.length === 0 ? (
              <h2>No results...</h2>
            ) : (
              filterItems.map((obj) => <UserItem key={obj.id} {...obj} />)
            )
          ) : (
            <div className='lds-facebook'>
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
