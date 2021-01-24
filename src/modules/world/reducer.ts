import update from 'immutability-helper';
import { IMatrix } from '../../interfaces';
import { ActionTypes } from './types';
import { MATRIX_SIZES } from '../../utils/constants';
import { parseStringId } from '../../utils/matrix.utils';

export interface IWorldReducerState {
  columns: number; // eje x
  rows: number; // eje Y
  matrix: IMatrix;
  islands: number;
  activeCells: number;
}
const [columns, rows] = parseStringId(MATRIX_SIZES[2].replace('x', '-'));

export const worldInitialState: IWorldReducerState = {
  columns,
  rows,
  matrix: [],
  islands: 0,
  activeCells: 0
};

export interface IWorldsPayload {
  matrix?: IMatrix;
  islands?: number;
  activeCells?: number;
  columns?: number;
  rows?: number;
}

export default (state = worldInitialState, { type, payload }: { type: ActionTypes; payload }) => {
  switch (type) {
    case ActionTypes.SET_MATRIX:
      return update(state, {
        matrix: { $set: payload.matrix }
      });
    case ActionTypes.SET_ISLANDS:
      return update(state, {
        islands: { $set: payload.islands }
      });
    case ActionTypes.SET_ACTIVE_CELLS:
      return update(state, {
        activeCells: { $set: payload.activeCells }
      });
    case ActionTypes.SET_MATRIX_DIMENSIONS:
      return update(state, {
        columns: { $set: payload.columns },
        rows: { $set: payload.rows }
      });
    default:
      return state;
  }
};
