
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

neueAufgabeButton.onclick = (e)=> {
  frage = questions[Math.floor(Math.random()*questions.length)];
  frageDiv.innerText = frage.question
}

antwortButton.onclick = (e)=> {
  if ( antwortFeld.value.trim() === frage.answer ){
    punkteDiv.innerText = Number(punkteDiv.innerText) + 100
  } else {
    punkteDiv.innerText = Number(punkteDiv.innerText) - 100
  }
}
