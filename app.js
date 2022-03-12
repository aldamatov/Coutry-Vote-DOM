const usa = document.querySelector('#btn-usa-vote');
let  voteUSA = document.querySelector('#usa-vote-input');
let countUsa = 0;

const canada = document.querySelector('#btn-canada-vote');
let voteCanada = document.querySelector('#canada-vote-input')
let countCanada = 0;

const au = document.querySelector('#btn-au-vote');
let voteAu = document.querySelector('#au-vote-input')
let countAu = 0;



//Usa Count
usa.addEventListener('click', function () {
    countUsa++;
    voteUSA.innerText = countUsa;
    countUsa
})

//Canada Count
canada.addEventListener('click', function () {
    countCanada++;
    voteCanada.innerText = countCanada;
    
})

au.addEventListener('click', function () {
    countAu++;
    voteAu.innerText = countAu;
   
})

const clearBtn = document.querySelector('#clear')

clearBtn.addEventListener('click', function (){
     
    countUsa = 0;
    countCanada = 0;
    countAu = 0;

    voteUSA.innerHTML = countUsa;
    voteCanada.innerHTML = countCanada;
    voteAu.innerHTML = countAu;
    
});



