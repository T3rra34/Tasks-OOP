ui = new UI();
ls = new LS();

const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('ul');
taskList.addEventListener('click', deleteTask);

const clearBtn = document.querySelector('#clear-tasks');
document.addEventListener('DOMContentLoaded', getTasks);

form.addEventListener('submit', deleteTask);

function addTask(e) {
	const task = new Task(taskInput.value);
	ui.addTask(task);
	ls.addTask(task);
	e.preventDefault();
}
function deleteTask(e){
	let task = e.target.parentElement.firstChild;
	ui.deleteTask(task);
	task = task.textContent;
	ls.deleteTask(task);
}
function deleteTasks(e){
	let tasks = document.querySelector('ul');
	ui.deleteTasks(tasks);
	ls.deleteTasks();
}
function getTasks(e){
	tasks = ls.getData('tasks');
	ui.getTasks(tasks);
}