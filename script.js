const toDoArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e) {
  if (e.key === 'Enter') {
    addThingsToDo();
  }
}

function toDoMaker (text, delThisIndex) {
  const divParent = document.createElement("div");
  const divChild = document.createElement("div");
  const icon = document.createElement("i");
  const toDo = document.createElement("p");

  divParent.className = 'added';
  icon.className = 'fa-regular fa-square-check';
  toDo.textContent = text.need_to_do;

  divParent.addEventListener("click", () => {
    toDoArray.splice(delThisIndex, 1);
    localStorage.setItem('items', JSON.stringify(toDoArray));
    window.location.reload();
  })

  divChild.appendChild(icon);
  divParent.appendChild(divChild);
  divParent.appendChild(toDo);

  document.querySelector('.toDo').appendChild(divParent);
}

toDoArray.forEach(toDoMaker);

function addThingsToDo() {
  if(input.value === '') {
    //alert("You did not add any things to do!");
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Please enter your bill amount and number of people',
      })
  }

  else {
  let things_info = {
  'need_to_do' : input.value
  }

  toDoArray.push(things_info);
  localStorage.setItem('items', JSON.stringify(toDoArray));
  toDoMaker(toDoArray[toDoArray.length -1], toDoArray.length -1);

  input.value = "";
  }
}