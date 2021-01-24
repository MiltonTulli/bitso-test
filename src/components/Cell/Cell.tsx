import React from 'react';
import clsx from 'classnames';
import styles from './Cell.styles';

interface CellProps {
  position: string;
  active: boolean;
  handleToggle: (position: string) => void;
  size: number;
}

export const Cell: React.FunctionComponent<CellProps> = (props: CellProps) => {
  const { position, active, handleToggle, size } = props;
  const classes = styles({ size, active });

  return (
    <div
      data-testid="cell"
      onClick={() => handleToggle(position)}
      className={clsx(classes.root, active ? classes.active : classes.inactive)}
    />
  );
};
