import { ActionTypes } from './types';
import { Dispatch } from 'redux';
import { IState } from '../index';
import { IMatrix } from '../../interfaces';
import { IWorldsPayload } from './reducer';
import { parseStringId, createMatrix, getIslands, getActiveCells } from '../../utils/matrix.utils';

type IPayloadAction<P> = (p: P) => { type: string; payload: IWorldsPayload };
export type InitAction = () => (dispatch: Dispatch, getState: () => IState) => void;
export type ActionCreator<P> = (p: P) => (dispatch: Dispatch, getState: () => IState) => void;

// Actions
export const setMatrix: IPayloadAction<IMatrix> = (matrix: IMatrix) => ({
  type: ActionTypes.SET_MATRIX,
  payload: { matrix }
});

export const setIslands: IPayloadAction<number> = (islands: number) => ({
  type: ActionTypes.SET_ISLANDS,
  payload: { islands }
});

export const setActiveCells: IPayloadAction<number> = (activeCells: number) => ({
  type: ActionTypes.SET_ACTIVE_CELLS,
  payload: { activeCells }
});

export const setMatrixDimensions: IPayloadAction<{ columns: number; rows: number }> = ({
  columns,
  rows
}) => ({
  type: ActionTypes.SET_MATRIX_DIMENSIONS,
  payload: { columns, rows }
});

// Action Creators
export const init: InitAction = () => (dispatch, getState) => {
  const state: IState = getState();
  const matrix = createMatrix(state.worldReducer.columns, state.worldReducer.rows);
  dispatch(setActiveCells(0));
  dispatch(setIslands(0));
  dispatch(setMatrix(matrix));
};

export const toggleCell: ActionCreator<string> = (id: string) => (dispatch, getState) => {
  const state: IState = getState();
  const matrix: IMatrix = state.worldReducer.matrix;
  const [x, y] = parseStringId(id);
  const newMatrix: IMatrix = matrix;
  const searchedCell = matrix[y][x];
  newMatrix[y][x] = {
    ...searchedCell,
    active: !searchedCell.active
  };
  dispatch(setMatrix(newMatrix));
  const activeCells = getActiveCells(newMatrix);
  const islands = getIslands(activeCells);
  dispatch(setActiveCells(activeCells.length));
  dispatch(setIslands(islands.length));
};

export const saveMatrixDimensions: ActionCreator<{ columns: number; rows: number }> = ({
  columns,
  rows
}) => dispatch => {
  dispatch(setMatrixDimensions({ columns, rows }));
};
