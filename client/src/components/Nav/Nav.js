import React from 'react';
import '../../styles/Intro.css';
import './Nav.css';

export const Nav = ({loggedIn, logout}) => (
  <nav>
    <ul>
      <li>
        <a className='logo' href={(loggedIn) ? '' : '/'}>
          <h2>Table-AR</h2>
        </a>
      </li>
      {loggedIn ? (
        <li>
          <button type='button'
                  id='logOut'
                  className='btn btn-primary'
                  onClick={(event) => logout(event)} >
            LOGOUT
          </button>
        </li>
      ) :
        null
      }
      <li>
        <a href='https://github.com/Geoff-Goodwin-Dev/Table-AR/tree/development'>Github</a>
      </li>
    </ul>
  </nav>
);