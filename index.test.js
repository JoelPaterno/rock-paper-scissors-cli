const getComputerChoice = require('./index.js');
const getHumanChoice = require('./index.js');


describe("computer choice function", () => {
    test('returns a number less than 4', () => {
        expect(['rock', 'paper', 'scissors']).toContain(getComputerChoice());
    })
});