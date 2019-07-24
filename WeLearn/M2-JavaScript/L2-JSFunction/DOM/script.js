const myButton = document.querySelector('#mybutton');
const myBox = document.querySelector('#box');
myButton.addEventListener('click', (event) => {
  //this code runs when the button is clicked
  console.log('Like button clicked!');
  myButton.innerHTML = 'Liked!';
  myButton.style.backgroundColor = 'lightgreen';
});
