let randomNum = document.querySelector('#random-numbers-output');
let chooseNum = document.querySelector('#selected-numbers-output');
let generateNum = document.querySelector('#generate-random-numbers');
let balls = document.querySelectorAll('.ball');

let secondCounter = 0;
let chooseNumbers = [];
let generateNumbers = [];

function randomN (){
    return Math.floor(Math.random()*39)+1;
}

balls.forEach((ball) => {
    ball.addEventListener('click', function() {
      if (chooseNumbers.length < 7 && !this.classList.contains('selected')) {
        this.classList.add('selected');
        chooseNumbers.push(this.textContent);
        chooseNum.innerHTML += this.textContent+"  ";
      }  
    });
  });

  generateNum.addEventListener('click', getNumbers);
  
  
  function getNumbers (){
    if (chooseNumbers.length === 7){
      while (generateNumbers.length < 7){
          let x = randomN();
          if (!generateNumbers.includes(x)){
              generateNumbers.push(x);
          }
      }
      generateNum.removeEventListener('click', getNumbers);
      intervalId = setInterval(()=>{
          randomNum.innerHTML += generateNumbers[secondCounter]+ " ";
          secondCounter++
          if (secondCounter === 7){
              clearInterval(intervalId)
          }
      },2000)
      setTimeout(showResult, 16000);
    }
    else {
      alert("Izaberite sedam brojeva!")
    }
  }


function showResult (){
  let cumulate = 0;
  for (let i = 0; i < chooseNumbers.length; i++){
    if (generateNumbers.includes(parseInt(chooseNumbers[i]))){
      cumulate++
    }
  }

  let newDiv = document.createElement('div');
  newDiv.className = 'new-div';
  document.body.appendChild(newDiv);
  newDiv.innerHTML = "izvlacenje je zavrseno";

  let parag = document.createElement('p');
  newDiv.appendChild(parag);
  parag.innerHTML = "imali ste " + cumulate + " pogodjenih brojeva";

  let reloadBtn = document.createElement('button');
  reloadBtn.className = 'reloadBtn';
  reloadBtn.innerHTML = "igraj ponovo";
  newDiv.appendChild(reloadBtn);
        
   reloadBtn.addEventListener('click', function (){
     location.reload();
    })
}