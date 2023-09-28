/*import "styles.css";*/
const toggleSwitch = document.getElementById('toggleSwitch');
const switchdiv = document.querySelector('.switch');
const textLine = document.querySelector('h1')

toggleSwitch.addEventListener('change', function(){
  if (toggleSwitch.checked){
    document.body.style.backgroundColor='black';
    switchdiv.style.backgroundColor='grey';
    switchdiv.style.transform = 'translateX(50%)';
    textLine.style.color = 'white';

  } else{
    document.body.style.backgroundColor='white';
    switchdiv.style.backgroundColor='black';
    switchdiv.style.transform = 'translateX(0)';
    textLine.style.color = 'black';
  }
});
