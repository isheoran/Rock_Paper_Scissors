let score = 0;

const pickUserHand = (hand) => {
    const hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    document.getElementById("userPickImage").src = "./assets/" + hand + ".png";
    let cphand = pickComputerHand();
    
    refree(hand,cphand);
}

const pickComputerHand = () => {
    const handsArray = ["Rock","Paper","Scissors"];
    let CPHand = Math.floor(Math.random()*3);
    document.getElementById("computerPickHand").src = "./assets/" + handsArray[CPHand] + ".png";
    return handsArray[CPHand];
}

function refree(hand,cphand) {

    const refreeEl = document.querySelector(".decesion h1");
    const scoreEl = document.querySelector(".score h1");
    if(hand === cphand) {
        refreeEl.innerHTML = "It's a tie !";
    }
    else if(hand === "Paper") {
        if(cphand === "Scissors") {
            refreeEl.innerHTML = "You lose !";
        }
        else {
            refreeEl.innerHTML = "You win !";
            score ++;
            scoreEl.innerHTML = score;
        }
    }
    else if(hand === "Scissors") {
        if(cphand === "Rock") {
            refreeEl.innerHTML = "You lose !";
        }
        else {
            refreeEl.innerHTML = "You win !";
            score ++;
            scoreEl.innerHTML = score;
        }
    }
    else {
        if(cphand === "Paper") {
            refreeEl.innerHTML = "You lose !";
        }
        else {
            refreeEl.innerHTML = "You win !";
            score ++;
            scoreEl.innerHTML = score;
        }
    }
}

document.querySelector(".newGame").addEventListener("click",() => {
    const hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let contest = document.querySelector(".contest");
    contest.style.display = "none";
})