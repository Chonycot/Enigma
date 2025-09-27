const buttons = document.querySelectorAll('.tehnic_bar_button');

buttons.forEach(btn => {
  btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'rgba(39, 43, 41, 1)';
  });
  btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = ''; // Возвращаем исходный цвет
  });
});


const count1 = document.getElementById('btn1');
let totalClicks1 = 0;

count1.addEventListener('click', () => {
  totalClicks1++;
  console.log(totalClicks1); // или обновляем интерфейс
  document.getElementById('count1').innerHTML = `${totalClicks1}`;
});

const count2 = document.getElementById('btn2');
let totalClicks2 = 0;
count2.addEventListener('click', () => {
  totalClicks2++;
  console.log(totalClicks2); // или обновляем интерфейс
  document.getElementById('count2').innerHTML = `${totalClicks2}`;
});

const count3 = document.getElementById('btn3');
let totalClicks3 = 0;

count3.addEventListener('click', () => {
  totalClicks3++;
  console.log(totalClicks3); // или обновляем интерфейс
  document.getElementById('count3').innerHTML = `${totalClicks3}`;
});

const count4 = document.getElementById('btn4');
let totalClicks4 = 0;

count4.addEventListener('click', () => {
  totalClicks4++;
  console.log(totalClicks4); // или обновляем интерфейс
  document.getElementById('count4').innerHTML = `${totalClicks4}`;
});

const count5 = document.getElementById('btn5');
let totalClicks5 = 0;

count5.addEventListener('click', () => {
  totalClicks5++;
  console.log(totalClicks5); // или обновляем интерфейс
  document.getElementById('count5').innerHTML = `${totalClicks5}`;
});

const count6 = document.getElementById('btn6');
let totalClicks6 = 0;

count6.addEventListener('click', () => {
  totalClicks6++;
  console.log(totalClicks6); // или обновляем интерфейс
  document.getElementById('count6').innerHTML = `${totalClicks6}`;
});

const count7 = document.getElementById('btn7');
let totalClicks7 = 0;

count7.addEventListener('click', () => {
  totalClicks7++;
  console.log(totalClicks7); // или обновляем интерфейс
  document.getElementById('count7').innerHTML = `${totalClicks7}`;
});

/* const count8 = document.getElementById('btn8');
let totalClicks8 = 0;

count8.addEventListener('click', () => {
  totalClicks8++;
  console.log(totalClicks8); // или обновляем интерфейс
  document.getElementById('count8').innerHTML = `${totalClicks8}`;
}); */



// Элементы
const openFormButton = document.getElementById('openFormButton');
const modalForm = document.getElementById('modalForm');
const requestForm = document.getElementById('requestForm');
const countDisplay = document.getElementById('count8');

// Счетчик
let totalClicks8 = 0;

// Открытие формы
openFormButton.addEventListener('click', () => {
  modalForm.style.display = 'block';
});

// Закрытие формы при отправке
requestForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Чтобы страница не перезагружалась

  // Увеличиваем счетчик
  totalClicks8++;
  countDisplay.textContent = totalClicks8;

  // Скрываем форму
  modalForm.style.display = 'none';

  // Очищаем форму
  requestForm.reset();
});

// Закрытие формы при клике вне ее
window.addEventListener('click', (event) => {
  if (event.target === modalForm) {
    modalForm.style.display = 'none';
  }
});