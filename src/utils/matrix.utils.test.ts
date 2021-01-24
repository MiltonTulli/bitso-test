import * as utils from './matrix.utils';

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
      expect(islandGroups[0]).toEqual(expectedGroupsResult[0]);
      expect(islandGroups[1]).toEqual(expectedGroupsResult[1]);
      expect(islandGroups[2]).toEqual(expectedGroupsResult[2]);
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
});
