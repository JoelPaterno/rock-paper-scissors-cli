const getComputerChoice = require('./index.js');
const getHumanChoice = require('./index.js');


describe("computer choice function", () => {
    test('returns a number less than 4', () => {
        expect(['rock', 'paper', 'scissors']).toContain(getComputerChoice());
    })
});

describe("human choice function", () => {
    test('returns valid user input', () => {
        const promptSpy = jest.spyOn(window, 'prompt').mockReturnValueOnce('rock');
        const returnVal = getHumanChoice();
        expect(returnVal).toBe('rock');
        promptSpy.mockRestore();
    });

    //takes upper case
    //takes capslock
    //returns error for typos
});