/* 
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>

Разбей его на несколько подзадач:

1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle. */

const { isObjectLike } = require('lodash');

var throttle = require('lodash.throttle');

const mainForm = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const inputHeadler = e => {
  const { name, value } = e.target;
  formData[name] = value;
  const serializedData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, serializedData);
};

const rehidrateDate = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) return;
  const parseData = JSON.parse(savedData);
  const keysGata = Object.keys(parseData);
  console.log(keysGata);
  keysGata.forEach(key => (mainForm.elements[key].value = parseData[key]));
};
rehidrateDate();

mainForm.addEventListener('input', throttle(inputHeadler, 500));
