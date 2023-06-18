// code your solution here
function superbowlWin(array) {
    const winInstance = array.find(element => element.result === "W");
    if (winInstance) {
        return winInstance.year;
    } else {
        return undefined;
    }
}