
const checkResult = (player, computer) => {
    if (player === computer) return 'draw';
    else if (player === 'rock') {
        if (computer === 'paper') {
            return 'lose';
        }
        else if (computer === 'scissors') {
            return 'win';
        }
    }
    else if (player === 'scissors') {
        if (computer === 'paper') {
            return 'win';
        }
        else if (computer === 'rock') {
            return 'lose';
        }
    }
    else if (player === 'paper') {
        if (computer === 'scissors') {
            return 'lose';
        }
        else if (computer === 'rock') {
            return 'win';
        }
    }
};

export default checkResult;
