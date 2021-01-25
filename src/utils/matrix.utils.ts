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
  const result: string[][] = [];

  activeIds.forEach(p1 => {
    !result.some(group =>
      group.some(p2 => {
        if (isFamily(p1, p2)) {
          group.push(p1);
          return true;
        }
        if (isDiagonal(p1, p2)) {
          const [ar1, ar2] = getAristas(p1, p2);
          if (activeIds.some(p => p === ar1 || p === ar2)) {
            group.push(p1);
            return true;
          }
        }
        return false;
      })
    ) && result.push([p1]);
  });

  return result;
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
/**
 * Returns boolean whether two points are diagonally aligned;
 * @param { String } idA
 * @param { String } idB
 */
export const isDiagonal = (idA: string, idB: string): boolean => {
  const [x, y] = parseStringId(idA);
  return [
    `${x - 1}-${+y - 1}`,
    `${x - 1}-${+y + 1}`,
    `${x + 1}-${+y + 1}`,
    `${x + 1}-${+y - 1}`
  ].some(e => idB === e);
};
/**
 * Returns the edges of a diagonal
 * @param { String } idA
 * @param { String } idB
 */
export const getAristas = (idA: string, idB: string) => {
  const [Ax, Ay] = parseStringId(idA);
  const [Bx, By] = parseStringId(idB);
  const simbolX = Bx - Ax;
  const simbolY = By - Ay;
  return [`${Ax + simbolX}-${Ay}`, `${Ax}-${Ay + simbolY}`];
};
