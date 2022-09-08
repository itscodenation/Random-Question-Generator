let namesArray = [
    "Would you rather only be to use a fork (no spoon) or only be able to use a spoon (no fork)?",
    "Would you rather have edible spaghetti hair that regrows every night or sweat (not sweet) maple syrup?",
    "Would you rather have to read aloud every word you read or sing everything you say out loud?",
    "Would you rather have skin that changes color based on your emotions or tattoos appear all over your body depicting what you did yesterday?",
    "What’s your favorite flower or plant?",
    "What's the last tv show you watched?",
    "What is the last song you listened to?",
    "Have you ever met someone famous?",
   "You can have an unlimited supply of one thing for the rest of your life, what is it?",
    
    


];



$("button").click(function() {
    let winnerNum = Math.floor(Math.random() * namesArray.length);
    let winnerName = namesArray[winnerNum];
    console.log(winnerNum);
    $(".raffle-winner").append(`<p>${winnerName}</p>`);
});