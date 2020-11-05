import React from 'react';

const Modal = () => {
  return (
    <div class='modal'>
      <div class='modal-window'>
        <div class='modal-window__header'>
          <h3>Add user</h3>
          <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clip-path='url(#clip0)'>
              <path
                d='M9.49644 8.50482L16.7836 1.21762C17.0649 0.945987 17.0727 0.497804 16.8011 0.216548C16.5294 -0.0647068 16.0813 -0.0725056 15.8 0.199125C15.7941 0.204809 15.7883 0.210616 15.7826 0.216548L8.49533 7.50375L1.20813 0.216507C0.926871 -0.0551242 0.478688 -0.0473254 0.207057 0.23393C-0.0579367 0.508299 -0.0579367 0.943249 0.207057 1.21762L7.49426 8.50482L0.207057 15.792C-0.0693445 16.0685 -0.0693445 16.5167 0.207057 16.7931C0.4835 17.0695 0.931683 17.0695 1.20813 16.7931L8.49533 9.50589L15.7825 16.7931C16.0638 17.0647 16.512 17.0569 16.7836 16.7757C17.0486 16.5013 17.0486 16.0664 16.7836 15.792L9.49644 8.50482Z'
                fill='#C7C7C7'
              />
            </g>
            <defs>
              <clipPath id='clip0'>
                <rect width='17' height='17' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class='modal-window__content'>
          <form class='modal-form'>
            <input placeholder='Name and Surname' type='text' />
            <input placeholder='Profession' type='text' />
            <input placeholder='Skills' type='text' />
            <input placeholder='Location' type='text' />

            <div class='modal-form__buttons'>
              <button class='button button--cancel-modal'>Cancel</button>
              <button class='button button--add-modal'>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
