export const getRandomThrow = () => {
    let oneToThree = Math.floor(Math.random() * 3) + 1;
    if (oneToThree === 1) return 'rock';
    else if (oneToThree === 2) return 'paper';
    else if (oneToThree === 3) return 'scissors';
};
