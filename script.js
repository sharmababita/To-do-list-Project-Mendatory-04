// Get references to elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Listen for form submit
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  const taskText = input.value.trim();

  if (taskText !== '') {
    // Create new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create Done button
    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.className = 'btn btn-done';
    doneBtn.addEventListener('click', () => {
      li.classList.toggle('done');
    });

    // Create Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn btn-delete';
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    // Add buttons to list item
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    // Add list item to list
    list.appendChild(li);

    // Clear input box
    input.value = '';
  }
});
