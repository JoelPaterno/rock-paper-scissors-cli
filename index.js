console.log("Hello, World!");

function getComputerChoice() {
    let result = (Math.floor((Math.random() * 10)) % 3) + 1;
    console.log(result);
    return result;
};

module.exports = getComputerChoice;