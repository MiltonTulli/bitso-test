import React from 'react';
import clsx from 'classnames';
import { Cell } from '..';
import styles from './GridBoard.styles';
import { ICell, IMatrix } from '../../interfaces';
import { useDimensions } from '..';
import { calculateCellSize } from '../../utils/matrix.utils';

interface GridBoardProps {
  matrix: IMatrix;
  handleToggle: (id: string) => void;
  columns: number;
}

export const GridBoard: React.FunctionComponent<GridBoardProps> = (props: GridBoardProps) => {
  const { matrix, handleToggle, columns } = props;
  const { width } = useDimensions();
  const size = calculateCellSize(columns, width, 20 * 4);
  const classes = styles();
  return (
    <div className={clsx(classes.root)}>
      <table className="" cellSpacing="0">
        <tbody>
          {/* // rows */}
          {matrix &&
            matrix.length > 0 &&
            matrix.map((rowArr, y) => {
              return (
                <tr data-testid="row" key={rowArr[0].id.split('-')[1]}>
                  {/* // cols */}
                  {matrix[y].map((colCell: ICell) => {
                    return (
                      <td key={colCell.id}>
                        <Cell
                          data-testid="col"
                          size={size}
                          position={colCell.id}
                          active={colCell.active}
                          handleToggle={handleToggle}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
