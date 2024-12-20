const getComputerChoice = require('./index.js');

test('returns a number less than 4', () => {
    expect(getComputerChoice()).toBeLessThan(4);
});

test('returns a number above 0', () => {
    expect(getComputerChoice()).toBeGreaterThan(0);
});