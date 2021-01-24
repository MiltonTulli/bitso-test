import React from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';

import R from '../../utils/routes';
import styles from './Landing.styles';
import { MATRIX_SIZES } from '../../utils/constants';

interface ILandingProps {
  onDimensionsChange: (value: string) => void;
}

export const Landing: React.FunctionComponent<ILandingProps> = (props: ILandingProps) => {
  const classes = styles();
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onDimensionsChange(e.target.value);
  };

  const handleClick = () => history.push(R.BOARD);

  return (
    <div className={clsx(classes.root)}>
      <section>
        <div className="icon-list">
          <i className="snes-jp-logo"></i>
        </div>
        <h1 className="title">Bitso js challenge</h1>
        <p>
          ~ Milton Tulli ~{' '}
          <a href="https://www.linkedin.com/in/miltontulli/">
            <i className="nes-icon linkedin is-small"></i>
          </a>
        </p>
      </section>

      <section>
        <div className={clsx('nes-container with-title', classes.selectContainer)}>
          <p className="title">Choose Board Size</p>
          <div className="nes-select">
            <select data-testid="changeMatrixSize" defaultValue="-1" onChange={handleChange}>
              <option value="-1" disabled>
                Select..
              </option>
              {MATRIX_SIZES.map(size => {
                return (
                  <option key={size} value={size}>
                    {size}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </section>

      <section>
        <button type="button" className="nes-btn is-primary" onClick={handleClick}>
          Go to App
        </button>
      </section>
    </div>
  );
};
