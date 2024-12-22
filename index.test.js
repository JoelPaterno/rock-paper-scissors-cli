const getComputerChoice = require('./index.js');

test('returns a number less than 4', () => {
    expect(['rock', 'paper', 'scissors']).toContain(getComputerChoice());
});