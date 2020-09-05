const container = document.querySelector('.container');
const text = document.querySelector('#text');
const btn = document.querySelector('button')
const login = document.querySelector('.login')
const title = document.querySelector('h1')
const name = document.querySelector('#name')
const pointerContainer = document.querySelector('.pointer-container')


const totalTime = 9000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;


function closeWindow() {
  if (!name.value) {
    alert('Wpisz swoje imię')
  } else {
    login.style.display = 'none'
    title.textContent += `Miłego dnia, ${name.value}`
    container.className = 'container shrink anim'
    container.className = 'container shrink anim'
    pointerContainer.classList.add('anim');
    breatheAnimation()
    setInterval(breatheAnimation, totalTime)
  }
}



function breatheAnimation() {
  text.innerHTML = 'Wdech!'
  container.className = 'container grow'


  setTimeout(() => {
    text.innerText = 'Zatrzymaj'

    setTimeout(() => {
      text.innerText = 'Wydech!'
      container.className = 'container shrink'
    }, holdTime)
  }, breatheTime)
}


btn.addEventListener('click', closeWindow)