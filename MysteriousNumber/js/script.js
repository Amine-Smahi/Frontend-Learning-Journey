   function GuessNum(){
var x = Math.floor(Math.random() * 100);
var turns = 5;
var won = 0;
var help = 'Guess The Number Between 1 and 100 :';
while (turns > 0) {
  var tries = prompt(help +
      ' You have ' + turns + ' tries left');

  if(tries >100 || tries < 0){
      hint = 'Pleas ! enter a number Between 1 and 100 !';
      turns = turns - 1;
  }
  else if (tries != x) {
    hint = 'Nope.';
    if (tries < x) hint += ' Too small!   ... click ok !';
    if (tries > x) hint += ' Too big!   ... click ok !';
    turns = turns - 1;
  }
  else {
    document.write(
      'You won');
    turns = 0;
    won = 1;
    hint = "Yes !";
  } 

  prompt(hint);
}
if(won ==0) alert('The secret number was ' + x);
    }
