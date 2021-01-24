import React from 'react';
import clsx from 'classnames';
import styles from './Status.styles';

interface IStatusProps {
  islands: number;
  activeCells: number;
  onRefresh: () => void;
}
export const Status: React.FunctionComponent<IStatusProps> = (props: IStatusProps) => {
  const classes = styles();
  return (
    <div className={clsx(classes.root)}>
      <div className={clsx('nes-container is-rounded', classes.container)}>
        <span>{props.islands} Islands</span>
        <span>{props.activeCells} Active Cells</span>
        <button onClick={props.onRefresh} type="button" className="nes-btn">
          Refresh
        </button>
      </div>
    </div>
  );
};
