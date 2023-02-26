const buttons = document.querySelectorAll('.btn')
const result = document.querySelector('#result')

const deleteBtn = document.querySelector('.delete');
const spaceBtn = document.querySelector('.space');

let randomSplit = [];

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
      result.innerHTML += btn.innerHTML
      randomSplit = result.innerHTML.split('')
      console.log(randomSplit)
      btn.classList.add('active');
      setTimeout(() => {
        btn.classList.remove('active');
      }, 300);
  })
});


deleteBtn.addEventListener('click', ()=> {
  randomSplit.pop()
  result.innerHTML = randomSplit.join('')
  deleteBtn.classList.add('active');
  setTimeout(() => {
    deleteBtn.classList.remove('active');
  }, 300);
});

spaceBtn.addEventListener('click', ()=> {
  randomSplit.push(' ')
  result.innerHTML = randomSplit.join('')
  spaceBtn.classList.add('active');
  setTimeout(() => {
    spaceBtn.classList.remove('active');
  }, 300);
});

// ------------------------------------------------------------

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key === 'Backspace') {
    randomSplit.pop();
    result.innerHTML = randomSplit.join('');
    deleteBtn.classList.add('active2');
    setTimeout(() => {
      deleteBtn.classList.remove('active2');
    }, 300);
  } else if (key === ' ') {
    randomSplit.push(' ');
    result.innerHTML = randomSplit.join('');
    spaceBtn.classList.add('active3');
    setTimeout(() => {
      spaceBtn.classList.remove('active3');
    }, 300);
  } else if (/^[a-zA-Z]$/.test(key)) {
    result.innerHTML += key;
    randomSplit = result.innerHTML.split('');
    console.log(randomSplit);
    const btn = document.querySelector(`.btn[data-key="${key}"]`);
    if (btn) {
      btn.classList.add('active');
      setTimeout(() => {
        btn.classList.remove('active');
      }, 300);
    }
  }
});