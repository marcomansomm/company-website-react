import React from 'react';
import styles from './Topnav.module.css'; // Importa o CSS Module
import SubMenu from '../SubMenu';

const TopNav = () => {
  return (
    <header>
      <nav className={`navbar navbar-expand-md navbar-dark fixed-top ${styles.navbar}`}>
        <img className={`${styles.nameSize} ml-5`} src={`${process.env.PUBLIC_URL}/images/markus/markusName.png`} alt="Markus Name" />
        <img className={styles.logoSize} src={`${process.env.PUBLIC_URL}/images/markus/logo.png`} alt="Logo" />
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse left ${styles.left}`} id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <SubMenu link="#" text="Home" isActive={true} />
            <SubMenu link="itSupport.html" text="Contact IT" />
            <SubMenu link="/login" text="Log In" />
            <SubMenu link="/joinUs" text="Join Us" isButton={true} />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default TopNav;
