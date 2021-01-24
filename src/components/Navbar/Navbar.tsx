import React from 'react';
import clsx from 'classnames';
import { Link } from 'react-router-dom';
import R from '../../utils/routes';
import styles from './Navbar.styles';
import ArrowLeftOutlined from '@material-ui/icons/ArrowLeftOutlined';

export const Navbar = () => {
  const classes = styles();
  return (
    <div className={clsx(classes.root)}>
      <Link className={classes.link} to={R.ROOT}>
        <ArrowLeftOutlined fontSize="large" />
        <span>Go back</span>
      </Link>
      <i className={clsx('snes-jp-logo', classes.icon)}></i>
    </div>
  );
};
