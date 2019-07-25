const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const button8 = document.querySelector('#button8');
const button9 = document.querySelector('#button9');


let p1 = [];
let p2 = [];
let whosPlaying = 0;
let player = 1;

button1.addEventListener('click', (e) => {
  whosPlaying++;
  if (whosPlaying %2==0) {
    player = 2;
    button1.style.backgroundColor = 'red';
  } else {
    player = 1;
    button1.style.backgroundColor = 'blue';
  }
  if (player == 1) {
    p1.push(1);
  } else {
    p2.push(1);
  }
  console.log(p1);
  console.log(p2);
  console.log('player ' + player + ' clicked a button 1 ');



});
button2.addEventListener('click', (e) => {
  whosPlaying++;
  if (whosPlaying %2==0) {
    player = 2;
    button2.style.backgroundColor = 'red';
  } else {
    player = 1;
    button2.style.backgroundColor = 'blue';
  }
  if (player == 1) {
    p1.push(2);
  } else {
    p2.push(2);
  }
  console.log(p1);
  console.log(p2);
  console.log('player ' + player + ' clicked a button 2 ');
});
button3.addEventListener('click', (e) => {
  whosPlaying++;
  if (whosPlaying %2==0) {
    player = 2;
    button3.style.backgroundColor = 'red';
  } else {
    player = 1;
    button3.style.backgroundColor = 'blue';
  }
  if (player == 1) {
    p1.push(3);
  } else {
    p2.push(3);
  }
  console.log(p1);
  console.log(p2);
  console.log('player ' + player + ' clicked a button 3 ');
});
button4.addEventListener('click', (e) => {
  whosPlaying++;
  if (whosPlaying %2==0) {
    player = 2;
    button4.style.backgroundColor = 'red';
  } else {
    player = 1;
    button4.style.backgroundColor = 'blue';
  }
  if (player == 1) {
    p1.push(4);
  } else {
    p2.push(4);
  }
  console.log(p1);
  console.log(p2);
  console.log('player ' + player + ' clicked a button 4 ');
});
button5.addEventListener('click', (e) => {
  whosPlaying++;
  if (whosPlaying %2==0) {
    player = 2;
    button5.style.backgroundColor = 'red';
  } else {
    player = 1;
    button5.style.backgroundColor = 'blue';
  }
  if (player == 1) {
    p1.push(5);
  } else {
    p2.push(5);
  }
  console.log(p1);
  console.log(p2);
  console.log('player ' + player + ' clicked a button 5 ');
});
button6.addEventListener('click', (e) => {
  whosPlaying++;
  if (whosPlaying %2==0) {
    player = 2;
    button6.style.backgroundColor = 'red';
  } else {
    player = 1;
    button6.style.backgroundColor = 'blue';
  }
  if (player == 1) {
    p1.push(6);
  } else {
    p2.push(6);
  }
  console.log(p1);
  console.log(p2);
  console.log('player ' + player + ' clicked a button 6 ');
});
button7.addEventListener('click', (e) => {
  whosPlaying++;
  if (whosPlaying %2==0) {
    player = 2;
    button7.style.backgroundColor = 'red';
  } else {
    player = 1;
    button7.style.backgroundColor = 'blue';
  }
  if (player == 1) {
    p1.push(7);
  } else {
    p2.push(7);
  }
  console.log(p1);
  console.log(p2);
  console.log('player ' + player + ' clicked a button 7 ');
});
button8.addEventListener('click', (e) => {
  whosPlaying++;
  if (whosPlaying %2==0) {
    player = 2;
    button8.style.backgroundColor = 'red';
  } else {
    player = 1;
    button8.style.backgroundColor = 'blue';
  }
  if (player == 1) {
    p1.push(8);
  } else {
    p2.push(8);
  }
  console.log(p1);
  console.log(p2);
  console.log('player ' + player + ' clicked a button 8 ');
});
button9.addEventListener('click', (e) => {
  whosPlaying++;
  if (whosPlaying %2==0) {
    player = 2;
    button9.style.backgroundColor = 'red';
  } else {
    player = 1;
    button9.style.backgroundColor = 'blue';
  }
  if (player == 1) {
    p1.push(9);
  } else {
    p2.push(9);
  }
  console.log(p1);
  console.log(p2);
  console.log('player ' + player + ' clicked a button 9 ');
});
