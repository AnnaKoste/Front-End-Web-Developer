var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var buttonsDel = document.querySelectorAll("button.delete");;

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var but = document.createElement("button");
	but.classList.add("delete");
	but.innerHTML = "Delete";
	but.addEventListener("click", removeParent);
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(but);
	li.addEventListener("click", addClassDone);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function removeParent() {
	this.parentElement.remove();
}

function addClassDone() {
	this.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach(function(item) {
	item.addEventListener("click", addClassDone);
});

buttonsDel.forEach(function(item) {
	item.addEventListener("click", removeParent);
});
