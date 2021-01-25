import * as utils from './matrix.utils';
import { ICell } from '../interfaces';

describe('Matrix Utils', () => {
  describe('createMatrix', () => {
    it('Should return matrix with correct columns & rows', () => {
      const cols = 10;
      const rows = 5;
      const matrix = utils.createMatrix(cols, rows);
      expect(matrix.length).toEqual(rows);
      const firstRow = matrix[0];
      expect(firstRow.length).toEqual(cols);
    });
  });
  describe('parseStringId', () => {
    it('Should return "x" and "y" as an array', () => {
      const [x, y] = utils.parseStringId('1-2');
      expect(x).toEqual(1);
      expect(y).toEqual(2);
    });
    it('Should not accept invalid string', () => {
      expect(utils.parseStringId('1-x')).toEqual([]);
      expect(utils.parseStringId('1')).toEqual([]);
      expect(utils.parseStringId('ECHO')).toEqual([]);
      expect(utils.parseStringId('x-x')).toEqual([]);
      expect(utils.parseStringId('x@2')).toEqual([]);
      expect(utils.parseStringId('x/2')).toEqual([]);
      expect(utils.parseStringId('x+2')).toEqual([]);
    });
  });
  describe('getIslands', () => {
    // util to convert arr of ids into acive ones
    const toActivePoints = (arr: string[]): ICell[] => arr.map(id => ({ id, active: true }));
    it('Should correct islands', () => {
      const props = [
        { id: '3-1', active: true },
        { id: '4-1', active: true },
        { id: '3-2', active: true }
      ];
      const expectedResult = [props.map(i => i.id)];
      const islandGroups = utils.getIslands(props);
      expect(islandGroups).toEqual(expectedResult);
      expect(islandGroups.length).toEqual(1);
    });
    it('Should correct islands', () => {
      const arrOfPoints = [
        { id: '2-2', active: true },
        { id: '5-2', active: true },
        { id: '3-2', active: true },
        { id: '3-3', active: true },
        { id: '5-3', active: true }
      ];
      const expectResult = [
        ['2-2', '3-2', '3-3'],
        ['5-2', '5-3']
      ];
      const result = utils.getIslands(arrOfPoints);
      expect(result).toStrictEqual(expectResult);
    });
    it('Should correct islands', () => {
      const arrOfPoints = [
        { id: '1-1', active: true },
        { id: '2-1', active: true },
        { id: '1-2', active: true },
        { id: '3-2', active: true },
        { id: '3-3', active: true },
        { id: '4-3', active: true },
        { id: '1-4', active: true },
        { id: '2-4', active: true }
      ];
      const expectResult = [
        ['1-1', '2-1', '1-2'],
        ['3-2', '3-3', '4-3'],
        ['1-4', '2-4']
      ];
      const result = utils.getIslands(arrOfPoints);
      expect(result).toStrictEqual(expectResult);
    });
    it('Should correct islands', () => {
      const props = [
        { id: '0-0', active: true },
        { id: '2-1', active: true },
        { id: '1-2', active: true },
        { id: '2-2', active: true }
      ];
      const islandGroups = utils.getIslands(props);
      expect(islandGroups.length).toEqual(2);
    });
    it('Should correct islands', () => {
      const arrOfPoints = [
        { id: '2-1', active: true },
        { id: '1-2', active: true },
        { id: '2-2', active: true }
      ];
      const expectResult = [['2-1', '1-2', '2-2']];
      const result = utils.getIslands(arrOfPoints);
      expect(result).toStrictEqual(expectResult);
    });
    it('Should correct islands', () => {
      const props = [
        { id: '1-1', active: true },
        { id: '1-2', active: true },
        { id: '2-2', active: true },
        { id: '8-2', active: true },
        { id: '1-3', active: true },
        { id: '8-3', active: true },
        { id: '3-7', active: true },
        { id: '4-7', active: true }
      ];

      const expectedGroupsResult = [
        ['3-7', '4-7'],
        ['8-2', '8-3'],
        ['1-1', '1-2', '2-2', '1-3']
      ];

      const islandGroups = utils.getIslands(props);
      expect(islandGroups.length).toEqual(expectedGroupsResult.length);
    });
    it('Should correct islands', () => {
      const arrOfPoints = [
        { id: '3-1', active: true },
        { id: '1-2', active: true },
        { id: '2-2', active: true },
        { id: '3-2', active: true }
      ];
      const expectResult = [['3-1', '1-2', '2-2', '3-2']];

      const result = utils.getIslands(arrOfPoints);

      expect(result).toStrictEqual(expectResult);
      expect(result.length).toEqual(1);
    });
    it('Should correct islands', () => {
      // Arrange
      const arrOfPoints = toActivePoints(['1-3', '2-1', '2-2', '2-3']);
      const expectResult = [['1-3', '2-1', '2-2', '2-3']];

      // Action
      const result = utils.getIslands(arrOfPoints);

      // Asserts
      expect(result).toStrictEqual(expectResult);
      expect(result.length).toEqual(1);
    });
  });
  describe('getAristas', () => {
    it('getAristas should return arista 1', () => {
      // Arrange
      const pointA = '2-2';
      const pointB = '3-3';
      const expectResult = ['3-2', '2-3'];

      // Action
      const result = utils.getAristas(pointA, pointB);

      // Asserts
      expect(result).toStrictEqual(expectResult);
    });

    it('getAristas should return arista 2', () => {
      // Arrange
      const pointA = '2-2';
      const pointB = '1-1';
      const expectResult = ['1-2', '2-1'];

      // Action
      const result = utils.getAristas(pointA, pointB);

      // Asserts
      expect(result).toStrictEqual(expectResult);
    });

    it('getAristas should return arista 3', () => {
      // Arrange
      const pointA = '2-2';
      const pointB = '3-1';
      const expectResult = ['3-2', '2-1'];

      // Action
      const result = utils.getAristas(pointA, pointB);

      // Asserts
      expect(result).toStrictEqual(expectResult);
    });

    it('getAristas should return arista 4', () => {
      // Arrange
      const pointA = '2-2';
      const pointB = '1-3';
      const expectResult = ['1-2', '2-3'];

      // Action
      const result = utils.getAristas(pointA, pointB);

      // Asserts
      expect(result).toStrictEqual(expectResult);
    });

    it('getAristas should return arista 5', () => {
      // Arrange
      const pointA = '2-2';
      const pointB = '3-3';
      const expectResult = ['3-2', '2-3'];

      // Action
      const result = utils.getAristas(pointA, pointB);

      // Asserts
      expect(result).toStrictEqual(expectResult);
    });

    it('getAristas should return arista 6', () => {
      // Arrange
      const pointA = '2-4';
      const pointB = '3-3';
      const expectResult = ['3-4', '2-3'];

      // Action
      const result = utils.getAristas(pointA, pointB);

      // Asserts
      expect(result).toStrictEqual(expectResult);
    });
  });
  describe('calculateCellSize', () => {
    it('Should return number', () => {
      expect(utils.calculateCellSize(1, 2, 3)).toEqual(expect.any(Number));
    });
  });
  describe('isFamily', () => {
    it('Should return true', () => {
      expect(utils.isFamily('1-2', '2-2')).toEqual(true);
      expect(utils.isFamily('1-2', '0-2')).toEqual(true);
      expect(utils.isFamily('1-2', '1-1')).toEqual(true);
      expect(utils.isFamily('1-2', '1-3')).toEqual(true);
    });
    it('Should return false', () => {
      expect(utils.isFamily('1-2', '3-1')).toEqual(false);
      expect(utils.isFamily('1-2', '2-3')).toEqual(false);
      expect(utils.isFamily('1-2', '1-0')).toEqual(false);
      expect(utils.isFamily('1-2', '0-3')).toEqual(false);
    });
  });
  describe('idHasFamilyOnArr', () => {
    it('Should return true', () => {
      expect(utils.idHasFamilyOnArr('1-2', ['2-2'])).toEqual(true);
    });
    it('Should return false', () => {
      expect(utils.idHasFamilyOnArr('1-2', ['3-5'])).toEqual(false);
      expect(utils.idHasFamilyOnArr('1-2', undefined as any)).toEqual(false);
    });
  });
  describe('getActiveCells', () => {
    it('Should return empty array', () => {
      const matrix = utils.createMatrix(5, 5);
      expect(utils.getActiveCells(matrix)).toEqual([]);
    });

    it('Should return active cells', () => {
      const matrix = [
        [
          { id: '0-0', active: false },
          { id: '1-0', active: false },
          { id: '2-0', active: false }
        ],
        [
          { id: '0-1', active: false },
          { id: '1-1', active: true },
          { id: '2-1', active: false }
        ],
        [
          { id: '0-2', active: false },
          { id: '1-2', active: false },
          { id: '2-2', active: true }
        ]
      ];
      const activeCellsResult = utils.getActiveCells(matrix);
      const expectedResult = [
        { id: '1-1', active: true },
        { id: '2-2', active: true }
      ];

      expect(activeCellsResult).toEqual(expectedResult);
    });
  });
  describe('isDiagonal', () => {
    it('Should return true', () => {
      expect(utils.isDiagonal('2-2', '3-1')).toBe(true);
      expect(utils.isDiagonal('3-1', '2-2')).toBe(true);
      expect(utils.isDiagonal('6-1', '7-2')).toBe(true);
      expect(utils.isDiagonal('7-2', '6-1')).toBe(true);
    });
    it('Should return false', () => {
      expect(utils.isDiagonal('2-2', '2-1')).toBe(false);
      expect(utils.isDiagonal('2-2', '3-2')).toBe(false);
      expect(utils.isDiagonal('2-2', '4-2')).toBe(false);
      expect(utils.isDiagonal('2-2', '5-1')).toBe(false);
    });
  });
});
