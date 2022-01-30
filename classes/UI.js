class UI {
	addUIelement(elementname, classname = '', textcontent = '', atributes={}){
		const element = document.createElement(elementname);
		element.className = classname;
		element.appendChild(document.createTextNode(textcontent));
		if(Object.keys(atributes).lenght > 0){
			for(let key in atributes){
				element.setAttribute(key, atributes[key]);
			}
		}
		return element;
	}

	addTask(task) {
		const li = this.addUIelement('li', 'collection-item', task.name)
		const link = this.addUIelement('a', 'secondary-content', 'X', {'href':'#'})
		li.appendChild(link);
		const list = document.querySelector('ul');
		list.appendChild(li);
		const input = document.querySelector('#task')
		input.value = '';
		task.addedToUI(); 
	}

	deleteTask(task) {
		const deleteIcon = task.nextSibling;
		if(deleteIcon.textContent == 'X'){
			if(confirm('Do you want to delete this task?')) {
				task.parentElement.remove();
			}
		}
	}

	deleteTasks(tasks){
		if(confirm('Do you want to delete all tasks?')) {
			while(tasks.firstChild){
				tasks.removeChild(tasks.firstChild);
			}
		}
	}

	getTasks(tasks){
		for(let i = 0; i < tasks.lenght; i++){
			const li = this.addUIelement('li', 'collection-item', tasks[i].name);
			const link = this.addUIelement('a', 'secondary-content', 'X', {'href':'#'})
			li.appendChild(link);
			const list = document.querySelector('ul');
			list.appendChild(li);
		}
	}
}