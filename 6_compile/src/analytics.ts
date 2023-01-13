const button = document.getElementById('button')!;

function clickHandler(message: string) {
  console.log('clicked' + message);
}

button.addEventListener('click' , clickHandler.bind(null, '天寸都'));