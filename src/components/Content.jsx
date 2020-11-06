import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { setUsers } from '../redux/actions/users';
import UserItem from './UserItem';

const Content = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('/users').then(({ data }) => {
      dispatch(setUsers(data));
      console.log(data);
    });
  }, []);

  //const { items } = useSelector(({ users }) => users);

  //console.log(items);
  return (
    <div className='content'>
      <div className='container'>
        <div className='content__items content__items--block content__items--list'>
          {/*items && items.map((obj) => <UserItem />)*/}
        </div>
      </div>
    </div>
  );
};

export default Content;
