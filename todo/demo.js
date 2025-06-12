const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '❌';
  removeBtn.className = 'remove-btn';

  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
  });
  li.appendChild(removeBtn);
  li.addEventListener('click', () => {
    list.removeChild(li);
    list.appendChild(li);
  });
  list.insertBefore(li, list.firstChild);
  input.value = '';
});
