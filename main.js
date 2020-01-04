
function computerPlay(){
    let choice= Math.floor(Math.random()*3)+1;
    switch(choice){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function playRound(user_selection, computer_selection){
    computer_selection=computer_selection.toLowerCase();
    user_selection=user_selection.toLowerCase();

    if(computer_selection==user_selection){
        return "It's a tie";
    }
    if(computer_selection=="rock"){
        if(user_selection=="paper"){
            return "Player wins, computer chose rock";
        }
        if(user_selection=="scissors"){
            return "Computer wins, computer chose rock";
        }
    }else if(computer_selection=="paper"){         
        if(user_selection=="rock"){
            return "Computer wins, computer chose paper";
        }
        if(user_selection=="scissors"){
            return "Player wins, computer chose paper";
        }
    }else if(computer_selection=="scissors"){      
        if(user_selection=="rock"){
            return "Player wins, computer chose scissors";
        }
        if(user_selection=="paper"){
            return "Computer wins, computer chose scissors";
        }
    }
}

function game(e){
    if(user_score + computer_score == 5){
        user_score=0;
        computer_score=0;
        score_p.textContent = '0 - 0'
        return;
    }
    let user_selection = this.id;
    let computer_selection = computerPlay();
    let result = playRound(user_selection, computer_selection);
    result_p.textContent = result;
    if(result[0]=="P"){
        ++user_score;
    }else if(result[0]=="C"){
        ++computer_score;
    }else{
        --i;
    }
    score_p.textContent = user_score+" - "+computer_score;

    if(user_score>computer_score && user_score+computer_score == 5){
        result_p.textContent = "Congratulations, Click any item to reset score";
    }else if(computer_score > user_score && user_score+computer_score == 5){
        result_p.textContent = "You Lost, Click any item to reset score";
    }
}

let result_div = document.querySelector('#score');
let result_p = document.createElement('p');
let score_p = document.createElement('p');
result_p.textContent = 'Let\'s play';
score_p.textContent = '0 - 0';
result_div.appendChild(result_p);
result_div.appendChild(score_p);
let user_score=0;
let computer_score=0;


const options = document.querySelectorAll('.option');
options.forEach((option)=>{
    option.addEventListener('click',game);
});

