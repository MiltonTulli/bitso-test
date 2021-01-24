import * as actions from './actions';
import reducer, { worldInitialState } from './reducer';
import { ActionTypes } from './types';
import { createMatrix } from '../../utils/matrix.utils';

describe('world reducer', () => {
  describe('actions', () => {
    it('Should create an action to set the matrix', () => {
      const matrix = createMatrix(10, 5);
      expect(actions.setMatrix(matrix)).toEqual({
        type: ActionTypes.SET_MATRIX,
        payload: { matrix }
      });
    });
    it('Should create an action to set islands number', () => {
      expect(actions.setIslands(2)).toEqual({
        type: ActionTypes.SET_ISLANDS,
        payload: { islands: 2 }
      });
    });
    it('Should create an action to set active cells number', () => {
      expect(actions.setActiveCells(2)).toEqual({
        type: ActionTypes.SET_ACTIVE_CELLS,
        payload: { activeCells: 2 }
      });
    });
    it('Should create an action to set matrix rows and columns', () => {
      const columns = 10;
      const rows = 5;
      expect(actions.setMatrixDimensions({ columns, rows })).toEqual({
        type: ActionTypes.SET_MATRIX_DIMENSIONS,
        payload: { columns, rows }
      });
    });
  });
  describe('reducer', () => {
    it('should return default state for unknow action type', () => {
      expect(reducer(worldInitialState, { type: 'UNKNOW' } as any)).toEqual(worldInitialState);
    });

    it('should handle SET_MATRIX & return new state', () => {
      const matrix = createMatrix(5, 5);
      expect(
        reducer(worldInitialState, {
          type: ActionTypes.SET_MATRIX,
          payload: { matrix }
        })
      ).toEqual({
        ...worldInitialState,
        matrix
      });
    });
    it('should handle SET_ISLANDS & return new state', () => {
      const islands = 5;
      expect(
        reducer(worldInitialState, {
          type: ActionTypes.SET_ISLANDS,
          payload: { islands }
        })
      ).toEqual({
        ...worldInitialState,
        islands
      });
    });
    it('should handle SET_ACTIVE_CELLS & return new state', () => {
      const activeCells = 5;
      expect(
        reducer(worldInitialState, {
          type: ActionTypes.SET_ACTIVE_CELLS,
          payload: { activeCells }
        })
      ).toEqual({
        ...worldInitialState,
        activeCells
      });
    });
    it('should handle SET_MATRIX_DIMENSIONS & return new state', () => {
      const rows = 5;
      const columns = 10;
      expect(
        reducer(worldInitialState, {
          type: ActionTypes.SET_MATRIX_DIMENSIONS,
          payload: { columns, rows }
        })
      ).toEqual({
        ...worldInitialState,
        columns,
        rows
      });
    });
  });
});
