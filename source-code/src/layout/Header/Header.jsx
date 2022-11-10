import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Filter } from '../../components';
import { menu } from '../../helpers/menu';
import styles from './Header.module.css';
import { useCurrentPage } from '../../hooks';

export const Header = () => {
  const { isRootPage } = useCurrentPage();

  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.headerContainer)}>
        <p className={styles.logo}>Logo.</p>

        {isRootPage && <Filter />}

        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            {menu &&
              menu.map(({ id, name, path }) => (
                <li key={id}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `${isActive && styles.activeLink} ${styles.navLink}`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
