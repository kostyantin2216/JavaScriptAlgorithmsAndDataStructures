const { isSolvable } = require('./solvable-maze');

test('the following maze is solvable', () => {
    const maze = [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1]
    ];
    const sp = { x: 3, y: 1 };
    const ep = { x: 3, y: 3 };

    expect(isSolvable(maze, sp, ep)).toEqual(true);
});

test('the following maze is solvable', () => {
    const maze = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0],
        [1, 0, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0]
    ];
    const sp = { x: 3, y: 1 };
    const ep = { x: 5, y: 1 };

    expect(isSolvable(maze, sp, ep)).toEqual(true);
});

test('the following maze is solvable', () => {
    const maze = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0],
        [1, 0, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0]
    ];
    const sp = { x: 3, y: 1 };
    const ep = { x: 6, y: 6 };

    expect(isSolvable(maze, sp, ep)).toEqual(true);
});

test('the following maze is not solvable', () => {
    const maze = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0],
        [1, 0, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0]
    ];
    const sp = { x: 3, y: 1 };
    const ep = { x: 6, y: 6 };

    expect(isSolvable(maze, sp, ep)).toEqual(false);
});

test('the following maze is not solvable', () => {
    const maze = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0],
        [1, 0, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 0]
    ];
    const sp = { x: 3, y: 1 };
    const ep = { x: 6, y: 6 };

    expect(isSolvable(maze, sp, ep)).toEqual(false);
});
