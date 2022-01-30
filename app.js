ui = new UI();
ls = new LS();

const taskList = document.querySelector('ul');
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const clearBtn = document.querySelector('#clear-tasks');
document.addEventListener('DOMContentLoaded', getTasks);


taskList.addEventListener('click', deleteTask);

form.addEventListener('submit', addTask);

function addTask(e) {
	const li = document.createElement('li');
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));
	
	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#');
	li.appendChild(link);

	taskList.appendChild(li);

	storeTaskInLocalStorage(taskInput.value);

	taskInput.value = '';

	e.preventDefault();
}
function deleteTask(e){
	console.log(e.target.parentElement);
	if(e.target.textContent == "X"){
		if(confirm('Do you want to delete this task?')) {
			e.target.parentElement.remove();
			removeTaskFromLocalStorage(e.target.parentElement.textContent);
		}
	}
}

function deleteTasks(e){
	while(taskList.firstChild){
		taskList.removeChild(taskList.firstChild);
	}
	localStorage.clear();
}
function storeTaskInLocalStorage(task=null) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  console.log(tasks);
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function removeTaskFromLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  console.log(task);
  tasks.forEach(function(element, index){
  	console.log(element);
  	if(element == task.slice(0, -1)){
  		tasks.splice(index, 1);
  	}
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function getTasks(e){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.forEach(function(task){
  	const li = document.createElement('li');
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(task));
	
	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#');
	li.appendChild(link);

	taskList.appendChild(li);
  });
}