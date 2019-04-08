

/**
 * Given a two dimentional array representing a maze and a starting point and end point return true if
 * it is possible to reach the end point from the starting point.
 * 
 * The two dimentional maze array will contain 1's and 0's where 1 is a wall and 0 is en empty space
 * that can be passed through
 * 
 * for example the following maze is solvable:
 *     0  1  2  3  4  5  6
 * 
 * 0   1  1  1  1  1  1  1
 * 1   1  1  1  sp 0  0  1
 * 2   1  1  1  1  1  0  1
 * 3   1  1  0  0  0  0  1
 * 4   1  ep 0  1  1  0  1
 * 5   1  1  1  1  0  0  1
 * 6   1  1  1  1  1  1  1
 * 
 * and this maze is not solvable:
 *     0  1  2  3  4  5  6
 * 
 * 0   1  1  1  1  1  1  1
 * 1   1  1  1  sp 0  0  1
 * 2   1  1  1  1  1  1  1
 * 3   1  1  0  0  0  1  1
 * 4   1  ep 0  1  1  1  1
 * 5   1  1  1  1  0  0  1
 * 6   1  1  1  1  1  1  1
 * 
 * @param {number[][]} maze 
 * @param { x: number, y: number } sp - starting point
 * @param { x: number, y: number } ep - end point
 */
function isSolvable(maze, sp, ep, visited = []) {
    if (!sp || !ep) return false;
    if (sp.x === ep.x && sp.y === ep.y) return true;

    visited.push(sp);

    const neighbours = getNeighbours(maze, sp);

    let solvable = neighbours.some((neighbour) => {
        if (!visited.some((vp) => vp.x === neighbour.x && vp.y === neighbour.y)) {
            if (maze[neighbour.y][neighbour.x] === 0 && isSolvable(maze, neighbour, ep, visited)) {
               return true;
            }
        }
        return false;
    });
    return solvable;
}

function getNeighbours(maze, point) {
    const rows = maze.length;
    const cols = maze[0].length;
    const neighbours = [];

    if (point.x > 0) {
        const leftNeighbour = { y: point.y, x: point.x - 1 };
        neighbours.push(leftNeighbour);
    }

    if (point.x + 1 < cols) {
        const rightNeighbour = { y: point.y, x: point.x + 1 };
        neighbours.push(rightNeighbour);
    }

    if (point.y > 0) {
        const topNeightbour = { y: point.y - 1, x: point.x };
        neighbours.push(topNeightbour);
    }

    if (point.y + 1 < rows) {
        const bottomNeighbour = { y: point.y + 1, x: point.x };
        neighbours.push(bottomNeighbour);
    }

    return neighbours;
}

function printMaze(maze, sp, ep) {
    const columns = maze[0].length;
    let rowHeading = '    ';
    for (let i = 0; i < columns; i++) {
        rowHeading += i + '  ';
    }
    console.log(rowHeading);
    console.log('');
    for (let row = 0; row < maze.length; row++) {
        let rowText = row + '   ';
        for (let col = 0; col < maze[row].length; col++) {
            const point = maze[row][col];
            if (col === sp.x && row === sp.y) {
                rowText += 'sp ';
            } else if (col === ep.x && row === ep.y) {
                rowText += 'ep ';
            } else {
                rowText += point + '  ';
            }
        }
        console.log(rowText);
    }

}

module.exports = { isSolvable };
