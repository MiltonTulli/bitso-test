import { ICell, IMatrix } from '../interfaces';

// export utils -----------------
/**
 * @function createMatrix
 * @description Create a matrix (array of arrays) given cols & rows
 * @param {Number} cols - Num of columns (x)
 * @param {Number} rows - Num of rows (y)
 */
export const createMatrix = (cols: number, rows: number): ICell[][] => {
  let matrix: ICell[][] = [];
  for (let y = 0; y < rows; y++) {
    matrix[y] = [];
    for (let x = 0; x < cols; x++) {
      matrix[y][x] = {
        id: `${x}-${y}`,
        active: false
      };
    }
  }
  return matrix;
};
/**
 * @function parseStringId
 * @description Convert string with 'N-N' format and return number for both coordenates
 * @param {String} id - 'N-N' format
 * @returns {Array} with [ x, y ] format where x & y are numbers
 */
export const parseStringId = (id: string): number[] => {
  if (!/^\d+-\d+$/.test(id)) return [];
  const coordenate = id.split('-');
  const x = Number(coordenate[0]);
  const y = Number(coordenate[1]);
  return [x, y];
};

/**
 * @function getIslands
 * @description - Get matrix groups ('islands')
 * @param {ICell[]} activeCells - Active cells
 * @returns {Array<Array>} - Return an array with arrays for each group ("island") found
 */
export const getIslands = (activeCells: ICell[]): string[][] => {
  const activeIds: string[] = activeCells.map(cell => cell.id);
  let acum: string[][] = activeIds
    .reduce((acc: any[], curr: string) => {
      let newAcc = acc;
      let currFamily: string[] = [];
      for (let i = 0; i < acc.length; i++) {
        let id = acc[i];
        // if (curr && id && (isFamily(curr, id) || idHasFamilyOnArr(id, currFamily))) {
        let isFam = isFamily(curr, id);
        let hasfam = idHasFamilyOnArr(id, currFamily);
        if (curr && id && (isFam || hasfam)) {
          currFamily.push(id);
          delete newAcc[i];
        }
      }
      if (currFamily.length > 0) {
        return [currFamily, ...newAcc];
      } else {
        return acc;
      }
    }, activeIds)
    .filter(function(element) {
      return element !== undefined;
    });
  return acum;
};

export const calculateCellSize = (
  rowCount: number,
  windowWidth: number,
  spacingX: number
): number => {
  const space = windowWidth - spacingX;
  return Number(space / rowCount);
};

/**
 * @function isFamily
 * @param {String} idA - id to compre
 * @param {String} idB - id to compare
 * @returns {Boolean} - boolean value containing if id 'A' is family of id 'B'
 */
export const isFamily = (idA: string, idB: string): boolean => {
  if (idA === idB) return true;
  if (!idA) return false;
  const [x, y] = parseStringId(idA);
  switch (idB) {
    case `${x}-${y - 1}`:
    case `${x}-${y + 1}`:
    case `${x - 1}-${y}`:
    case `${x + 1}-${y}`:
      return true;
    default:
      return false;
  }
};

export const idHasFamilyOnArr = (id: string, arr: string[]): boolean => {
  if (!Array.isArray(arr)) return false;
  for (let idB of arr) {
    if (isFamily(id, idB)) {
      return true;
    }
  }
  return false;
};

export const getActiveCells = (matrix: IMatrix): ICell[] => {
  let active: ICell[] = [];
  for (let row of matrix) {
    for (let cell of row) {
      if (cell.active) {
        active.push(cell);
      }
    }
  }
  return active;
};
