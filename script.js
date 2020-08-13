const classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
	// Create the todo-container
	const id = parseInt(itemCountSpan) + 1
	const newTodoItem = document.createElement('div')
	newTodoItem.setAttribute('class', classNames.TODO_ITEM)
	newTodoItem.setAttribute('id', id)
	// Create the todo-checkbox
	const checkbox = document.createElement('input')
	checkbox.setAttribute('type', 'checkbox')
	checkbox.setAttribute('class', classNames.TODO_CHECKBOX)
	checkbox.addEventListener('change', countUnchecked)

	// Create the todo-text field
	const text = document.createElement('input')
	text.setAttribute('type', 'text')
	text.setAttribute('class', classNames.TODO_TEXT)

	// Create the delete button
	const deleteButton = document.createElement('button')
	deleteButton.innerHTML = 'Delete'
	deleteButton.setAttribute('class', classNames.TODO_DELETE)
	deleteButton.onclick = function (){
		document.querySelector(`#${id}`).remove()
		countItems()
		countUnchecked()
	}
	
	// Append to the list
	newTodoItem.appendChild(checkbox)
	newTodoItem.appendChild(text)
	newTodoItem.appendChild(deleteButton)
	list.appendChild(newTodoItem)
	countUnchecked()
	countItems()

}



function countUnchecked() {
	let counter = 0
	const checkboxes = document.querySelectorAll('.todo-checkbox')
	for (let i = 0; i < checkboxes.length;i++){
		if (!checkboxes[i].checked){
			counter ++
		}
	}
	uncheckedCountSpan.innerHTML = counter
}


function countItems() {
	const items = document.querySelectorAll('.todo-container')
	itemCountSpan.innerHTML = items.length
}