import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setOpen } from '../redux/actions/modal';
import { setSort } from '../redux/actions/sort';
import { setSearch } from '../redux/actions/users';

const Header = () => {
  const dispatch = useDispatch();

  const { sortType } = useSelector(({ sort }) => sort);
  const openType = useSelector(({ modal }) => modal.openType);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSort(type));
  }, []);

  const onSelectOpenType = React.useCallback((type) => {
    dispatch(setOpen(type));
  }, []);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__search'>
          <div className='form'>
            <div className='form-search'>
              <span className='form-icon'>
                <svg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M18.6148 16.758L14.5995 12.7422C15.5754 11.3848 16.112 9.76268 16.112 8.05523C16.112 5.9045 15.2747 3.88183 13.7517 2.36022C12.232 0.839278 10.208 0 8.05583 0C5.90437 0 3.88097 0.837308 2.35997 2.36022C0.83897 3.88051 0.000976562 5.90384 0.000976562 8.05523C0.000976562 10.2066 0.838314 12.2293 2.35997 13.7516C3.88097 15.2725 5.90371 16.1118 8.05583 16.1118C9.76268 16.1118 11.3835 15.5779 12.7423 14.5994L16.7576 18.6152C17.015 18.8719 17.3499 19 17.6862 19C18.0231 19 18.3587 18.8719 18.6148 18.6152C19.1277 18.1016 19.1277 17.2709 18.6148 16.758ZM4.21787 11.8937C3.19205 10.8679 2.62792 9.50394 2.62792 8.05458C2.62792 6.60521 3.19205 5.24253 4.21787 4.21675C5.24303 3.19096 6.60576 2.62619 8.05583 2.62619C9.5059 2.62619 10.8693 3.19096 11.8944 4.21675C12.9203 5.24253 13.4851 6.60587 13.4851 8.05523C13.4851 9.5046 12.9209 10.8679 11.8944 11.8944C10.8686 12.9202 9.50656 13.4836 8.05583 13.4836C6.6051 13.4836 5.24172 12.9188 4.21787 11.8937Z'
                    fill='#E3E4E4'
                  />
                </svg>
              </span>
              <input type='text' className='form-control' placeholder='Search user' onChange={handleChange} />
            </div>
            <button className='button button--search' type='submit'>
              Search
            </button>
          </div>
        </div>
        <div className='header__sort'>
          <svg
            onClick={() => onSelectSortType(!openType)}
            id={sortType ? 'active' : null}
            width='27'
            height='27'
            viewBox='0 0 27 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0)'>
              <path
                d='M0 20.25V25.875C0 26.496 0.504 27 1.125 27H6.75C7.371 27 7.875 26.496 7.875 25.875V20.25C7.875 19.629 7.371 19.125 6.75 19.125H1.125C0.504 19.125 0 19.629 0 20.25Z'
                fill='#DEDEDE'
              />
              <path
                d='M6.75 0H1.125C0.504 0 0 0.504 0 1.125V6.75C0 7.371 0.504 7.875 1.125 7.875H6.75C7.371 7.875 7.875 7.371 7.875 6.75V1.125C7.875 0.504 7.371 0 6.75 0Z'
                fill='#DEDEDE'
              />
              <path
                d='M6.75 9.5625H1.125C0.504 9.5625 0 10.0665 0 10.6875V16.3125C0 16.9335 0.504 17.4375 1.125 17.4375H6.75C7.371 17.4375 7.875 16.9335 7.875 16.3125V10.6875C7.875 10.0665 7.371 9.5625 6.75 9.5625Z'
                fill='#DEDEDE'
              />
              <path
                d='M25.875 0H10.6875C10.0665 0 9.5625 0.504 9.5625 1.125V6.75C9.5625 7.371 10.0665 7.875 10.6875 7.875H25.875C26.496 7.875 27 7.371 27 6.75V1.125C27 0.504 26.496 0 25.875 0Z'
                fill='#DEDEDE'
              />
              <path
                d='M10.6875 17.4375H25.875C26.496 17.4375 27 16.9335 27 16.3125V10.6875C27 10.0665 26.496 9.5625 25.875 9.5625H10.6875C10.0665 9.5625 9.5625 10.0665 9.5625 10.6875V16.3125C9.5625 16.9335 10.0665 17.4375 10.6875 17.4375Z'
                fill='#DEDEDE'
              />
              <path
                d='M10.6875 27H25.875C26.496 27 27 26.496 27 25.875V20.25C27 19.629 26.496 19.125 25.875 19.125H10.6875C10.0665 19.125 9.5625 19.629 9.5625 20.25V25.875C9.5625 26.496 10.0665 27 10.6875 27Z'
                fill='#DEDEDE'
              />
            </g>
            <defs>
              <clipPath id='clip0'>
                <rect width='27' height='27' fill='white' />
              </clipPath>
            </defs>
          </svg>
          <svg
            onClick={() => onSelectSortType(false)}
            id={sortType ? null : 'active'}
            width='27'
            height='27'
            viewBox='0 0 27 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0)'>
              <path
                d='M11.4231 0H1.03847C0.464919 0 0 0.464919 0 1.03847V11.4231C0 11.9967 0.464919 12.4616 1.03847 12.4616H11.4231C11.9967 12.4616 12.4616 11.9967 12.4616 11.4231V1.03847C12.4616 0.464919 11.9967 0 11.4231 0Z'
                fill='#DEDEDE'
              />
              <path
                d='M25.9615 0H15.5769C15.0033 0 14.5384 0.464919 14.5384 1.03847V11.4231C14.5384 11.9967 15.0033 12.4616 15.5769 12.4616H25.9615C26.5351 12.4616 27 11.9967 27 11.4231V1.03847C27 0.464919 26.5351 0 25.9615 0Z'
                fill='#DEDEDE'
              />
              <path
                d='M11.4231 14.5385H1.03847C0.464919 14.5385 0 15.0034 0 15.577V25.9616C0 26.5352 0.464919 27.0001 1.03847 27.0001H11.4231C11.9967 27.0001 12.4616 26.5352 12.4616 25.9616V15.577C12.4616 15.0034 11.9967 14.5385 11.4231 14.5385Z'
                fill='#DEDEDE'
              />
              <path
                d='M25.9615 14.5385H15.5769C15.0033 14.5385 14.5384 15.0034 14.5384 15.577V25.9616C14.5384 26.5352 15.0033 27.0001 15.5769 27.0001H25.9615C26.5351 27.0001 27 26.5352 27 25.9616V15.577C27 15.0034 26.5351 14.5385 25.9615 14.5385Z'
                fill='#DEDEDE'
              />
            </g>
            <defs>
              <clipPath id='clip0'>
                <rect width='27' height='27' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </div>
        <button onClick={() => onSelectOpenType(!openType)} className='button button--add'>
          Add
        </button>
      </div>
    </div>
  );
};

export default Header;
