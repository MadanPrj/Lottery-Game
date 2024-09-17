let num = prompt("Guess the lottery number between 0-10: "); //One time required

if (num == 0 || num == 1 || num == 2 || num == 3 || num == 4 || num == 5 || num == 6 || num == 7 || num == 8 || num == 10) {

    for (let chance = 3; chance >= 0; chance--) {
        if (num == 9) {
            alert(`Congrats you have won the jackpot of $100,000.\nYour number ${num} was the lucky number!`);
            break;
        } else if (chance == 0) {
            alert(`You have finished all your attempts\nBetter luck next time!`);
        } else {
            num = prompt(`You have guess wrong number. Try again! ${chance} attempt left`);
        }
    }

} else if (num == 9) {
    alert(`Congrats you have won the jackpot of $100,000.\nYour number ${num} was the lucky number!`);
} else {
    alert("Please enter the valid value!");
}
