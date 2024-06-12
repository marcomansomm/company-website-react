import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SubMenu.module.css';

const SubMenu = ({ link, text, isButton, isActive }) => {
  if (isButton) {
    return (
      <li className="nav-item">
        <Link className={`btn btn-primary ${styles.btnPrimary}`} to={link}>{text}</Link>
      </li>
    );
  }
  return (
    <li className={`nav-item ${isActive ? 'active' : ''}`}>
      <Link className="nav-link" to={link}>
        {text}
      </Link>
    </li>
  );
}

export default SubMenu;
