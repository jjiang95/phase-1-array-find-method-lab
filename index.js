// code your solution here
function superbowlWin(array) {
    const found = array.find(array => array.result === `W`);
    if (found) {
        return found.year
    } else {
        return undefined;
    }
}