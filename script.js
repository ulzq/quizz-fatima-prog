
var questions = [
  {question:'Was ist 3 + 5',answer:"8"},
  {question:'Wo liegt Berlin',answer:'In Deutschland'},
  {question:'Wo liegt Tokyo',answer:'In Japan'}
]

var frageDiv = document.getElementById('frage')
var punkteDiv = document.getElementById('punkte')
var neueAufgabeButton = document.getElementById('neu')
var antwortButton = document.getElementById('go')
var antwortFeld = document.getElementById('antwort')
let frage;

const aufgabe=(e)=> {
  frage = questions[Math.floor(Math.random()*questions.length)];
  frageDiv.innerText = frage.question
}
neueAufgabeButton.addEventListener("click",aufgabe)

const antwort = (e)=> {
  var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      if ( antwortFeld.value.trim() === frage.answer ){
        punkteDiv.innerText = Number(punkteDiv.innerText) + 100
        resolve(punkteDiv.innerText);
      } else {
        punkteDiv.innerText = Number(punkteDiv.innerText) - 100
      }
    }, 10000);
  });

  promise1.then(function(value) {
    console.log(value);
    
  });
}
neueAufgabeButton.addEventListener("click",antwort)



console.log(promise1);

